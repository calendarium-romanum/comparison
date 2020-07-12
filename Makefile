all: calendarium-romanum romcal

calendarium-romanum:
	$(MAKE) -C calendarium-romanum

romcal:
	$(MAKE) -C romcal

run: generate compare

generate:
	$(MAKE) -C calendarium-romanum run
	$(MAKE) -C romcal run

compare:
	diff --color -U1000 --ignore-case --ignore-space-change calendarium-romanum/output.txt romcal/output.txt

.PHONY: calendarium-romanum romcal
