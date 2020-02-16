.PHONY: build
build:
	bash ./bash_scripts/build.sh

.PHONY: build-production-app
build-production-app:
	bash ./bash_scripts/build-production-app.sh

.PHONY: up
up:
	docker-compose up -d

.PHONY: down
down:
	docker-compose down