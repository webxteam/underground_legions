.PHONY: build
build:
	bash ./bash_scripts/build.sh

.PHONY: up
up:
	docker-compose up -d