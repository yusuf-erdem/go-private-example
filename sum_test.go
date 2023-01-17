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

func Test_Divide(t *testing.T) {
	should := require.New(t)
	i := divide()
	should.Equal(i, 2)
}

func Test_Multiply(t *testing.T) {
	should := require.New(t)
	i := multiply()
	should.Equal(i, 12)
}
