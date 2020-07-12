all: Gemfile.lock

Gemfile.lock: Gemfile
	bundle install

run:
	bundle exec ruby generate.rb > output.txt
