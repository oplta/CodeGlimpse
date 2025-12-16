
package main

import "fmt"

type Config struct {
	Port int
	Env  string
}

func main() {
	config := Config{
		Port: 8080,
		Env:  "Production",
	}

	fmt.Printf("Starting server on port %d in %s mode\n", config.Port, config.Env)
	
	// This uses CodeGlimpse highlighting!
}
