# Babysitter Kata

## Background

This kata simulates a babysitter working and getting paid for one night. The rules are pretty straight forward.

The babysitter:

- starts no earlier than 5:00PM
- leaves no later than 4:00AM
- gets paid $12/hour from start-time to bedtime
- gets paid $8/hour from bedtime to midnight
- gets paid $16/hour from midnight to end of job
- gets paid for full hours (no fractional hours)

## Feature

_As a babysitter<br>
In order to get paid for 1 night of work<br>
I want to calculate my nightly charge<br>_

## Assumptions

The client is billed for the highest applicable amount that occurred during the hour

e.g. If the child went to bed at 8:45PM, then during the time of 8:00PM-8:59PM,
we met two conditions:

- $12/hour from start-time to bedtime
- $8/hour from bedtime to midnight<br>
  The client will be billed $12 for this hour.
