DBG_MAKEFILE ?=
ifeq ($(DBG_MAKEFILE),1)
    $(warning ***** starting Makefile for goal(s) "$(MAKECMDGOALS)")
    $(warning ***** $(shell date))
else
    MAKEFLAGS += -s
endif

MAKEFLAGS += --no-builtin-rules
MAKEFLAGS += --warn-undefined-variables
.SUFFIXES:

dev: # @HELP runs development processes
dev:
	npm run dev

format: # @HELP formats files
format:
	npm run format

changelog: # @HELP updates CHANGELOG.md
changelog:
	git-chglog -o CHANGELOG.md

release: # @HELP releases a new version as defined in ./scripts/release.sh
release:
	./scripts/release.sh

help: # @HELP prints this message
help:
	echo "TARGETS:"
	grep -E '^.*: *# *@HELP' $(MAKEFILE_LIST)     \
	    | awk '                                   \
	        BEGIN {FS = ": *# *@HELP"};           \
	        { printf "  %-30s %s\n", $$1, $$2 };  \
	    '
