package jsoniter

import (
	"github.com/stretchr/testify/require"
	"testing"
)

func TestCustom(t *testing.T) {

	t.Run("Fail Test", func(t *testing.T) {
		should := require.New(t)
		should.Equal(1, 123)
	})

}
