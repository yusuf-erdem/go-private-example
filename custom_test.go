package jsoniter

import (
	"fmt"
	"github.com/stretchr/testify/require"
	"testing"
	"time"
)

func TestCustom(t *testing.T) {

	t.Run("Fail Test", func(t *testing.T) {
		time.Sleep(1 * time.Second)
		fmt.Println("Custom Test Output")
		should := require.New(t)
		should.Equal(12, 123)
	})

}
