all: calendarium-romanum romcal

calendarium-romanum:
	$(MAKE) -C calendarium-romanum

romcal:
	$(MAKE) -C romcal

run:
	$(MAKE) -C calendarium-romanum run
	$(MAKE) -C romcal run
	diff --color calendarium-romanum/output.txt romcal/output.txt

.PHONY: calendarium-romanum romcal
