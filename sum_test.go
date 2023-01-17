package jsoniter

import (
	"github.com/stretchr/testify/require"
	"testing"
)

func Test_Sum(t *testing.T) {
	should := require.New(t)
	i := sum()
	should.Equal(i, 5)
}
