package jsoniter

import (
	"fmt"
	"github.com/stretchr/testify/require"
	"testing"
	"time"
)

func TestCustom(t *testing.T) {

	t.Run("Fail Test", func(t *testing.T) {
		time.Sleep(1500 * time.Millisecond)
		fmt.Println("Custom Test Output")
		should := require.New(t)
		should.Equal(1, 123)
	})

}
