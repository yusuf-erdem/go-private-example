package jsoniter

import (
	"github.com/stretchr/testify/require"
	"testing"
	"time"
)

func TestCustom(t *testing.T) {
	t.Run("Fail Test", func(t *testing.T) {
		time.Sleep(2 * time.Second)
		should := require.New(t)
		should.Equal(1, 123)
	})

}