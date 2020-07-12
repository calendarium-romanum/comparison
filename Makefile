all: calendarium-romanum

calendarium-romanum:
	$(MAKE) -C calendarium-romanum

run:
	$(MAKE) -C calendarium-romanum run

.PHONY: calendarium-romanum
