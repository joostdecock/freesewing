# Change log for: @freesewing/simone


## 2.17.0 (2021-07-01)

### Added

 - Added support for configuring the height of the Yoke. See [#642](https://github.com/freesewing/freesewing/issues/642)
 - The `s3collar and `s3armhole` options now allow shifting the shoulder seam (`s3` is short for *Shift Shoulder Seam*)
 - Added the `roundBack` option to replace the `yokeDart` option

### Removed

 - The `yokeDart` option is replaced by the `roundBack` option

## 2.16.1 (2021-05-30)

### Changed

 - Changed `department` setting in config in line with new grouping

## 2.13.2 (2021-02-21)

### Fixed

 - Fixed type in bustsidecode finder code

## 2.13.0 (2021-02-13)

### Fixed

 - Force bust dart intersection if not found initially

## 2.11.3 (2021-01-16)

### Fixed

 - Cleaned up notches

## 2.7.1 (2020-07-24)

### Fixed

 - Set missing option `brianFitCollar` to `false`

## 2.7.0 (2020-07-12)

### Changed

 - Ported simone to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names

## 2.4.4 (2020-03-15)

### Fixed

 - The `sleevecapBackFactorY` and `sleevecapFrontFactorY` options had a minimum above the default

## 2.2.0 (2020-02-22)

### Changed

 - Renamed `highPointShoulderToBust` measurement to `hpsToBust`
 - Removed deprecated `centerBackNeckToWaist` measurement

## 2.1.0 (2019-10-06)

### Added

 - Added the Simone shirt pattern
 - Initial release


This is the **initial release**, and the start of this change log.

> Prior to version 2, FreeSewing was not a JavaScript project.
> As such, that history is out of scope for this change log.

