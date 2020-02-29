package middleware

import (
	"net/http"

	"github.com/ncarlier/readflow/pkg/constant"
)

// IsAdmin is a middleware to limit access to administrators
func IsAdmin(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		isAdmin := r.Context().Value(constant.IsAdmin)
		if isAdmin != nil && isAdmin.(bool) {
			next.ServeHTTP(w, r)
			return
		}
		w.WriteHeader(403)
		w.Write([]byte("Forbidden\n"))
	})
}
