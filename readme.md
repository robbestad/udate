# µdate

### Motivation

* Micro lib that handle time related operations

### Usage

_future_
```
import udate from "@svenardo/udate";
const oneSecondFromNow = udate("add", now, "seconds", 1);
const oneMinuteFromNow = udate("add", now, "minutes", 1);
const oneHourFromNow = udate("add", now, "hours", 1);
```

_past_
```
import udate from "@svenardo/udate";
const oneSecondInThePast = udate("sub", now, "seconds", 1);
const oneMinuteInThePast = udate("sub", now, "minutes", 1);
const oneHourInThePast = udate("sub", now, "hours", 1);
```
---
More to come when I need it. File an issue you need an expansion.
