package middleware

import (
	"context"
	"net/http"

	"github.com/ncarlier/reader/pkg/constant"
	"github.com/ncarlier/reader/pkg/service"
)

// ProxyAuth is a middleware to checks HTTP request credentials from proxied headers
func ProxyAuth(inner http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
		username := r.Header.Get("X-WEBAUTH-USER")
		if username != "" {
			user, err := service.Lookup().GetOrRegisterUser(ctx, username)
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			ctx = context.WithValue(ctx, constant.UserID, *user.ID)
			inner.ServeHTTP(w, r.WithContext(ctx))
			return
		}
		w.Header().Set("WWW-Authenticate", `Basic realm="Ah ah ah, you didn't say the magic word"`)
		w.WriteHeader(401)
		w.Write([]byte("401 Unauthorized\n"))
	})
}
