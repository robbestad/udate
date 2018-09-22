# µTime

### Motivation

* Micro lib that handle time related operations

### Usage

_future_
```
import utime from "@svenardo/utime";
const oneSecondFromNow = utime("add", now, "seconds", 1);
const oneMinuteFromNow = utime("add", now, "minutes", 1);
const oneHourFromNow = utime("add", now, "hours", 1);
```

_past_
```
import utime from "@svenardo/utime";
const oneSecondInThePast = utime("sub", now, "seconds", 1);
const oneMinuteInThePast = utime("sub", now, "minutes", 1);
const oneHourInThePast = utime("sub", now, "hours", 1);
```
---
More to come when I need it. File an issue you need an expansion.
