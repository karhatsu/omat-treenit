#!/usr/bin/env bash
set -e

heroku pg:backups:capture
rm -f latest.dump
heroku pg:backups:download
pg_restore --verbose --clean --no-acl --no-owner -h localhost -d omat_treenit_development latest.dump
