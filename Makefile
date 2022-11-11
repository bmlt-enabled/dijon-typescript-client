.PHONY: generate-api-client
openapi.json:
	curl https://dijon-api.bmlt.dev/openapi.json > openapi.json

generate: openapi.json
	rm -rf src/resources/npm/api-client
	docker run --rm -v "$(shell pwd):/local" -w /local openapitools/openapi-generator-cli generate \
	    -i openapi.json \
	    -g typescript-fetch \
	    -p npmName=dijon-client \
	    -p npmVersion=latest \
	    --git-repo-id=dijon-typescript-client \
	    --git-user-id=bmlt-enabled \
	    -o .

clean:
	rm -f openapi.json
