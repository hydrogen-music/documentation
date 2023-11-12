# Changelog

## [1.2.3] - XXXX-XX-XX

### Added

- Add section for different note types available in the PatternEditor.

### Deprecated

- **This whole repo is now marked deprecated.** Its `Docbook`-based toolchain is
  quite out of date and will be replaced by a `Markdown`-based one. Also, it
  will be reintegrated into the web page and not shipped with Hydrogen bundles
  anymore.

## [1.2.2] - 2023-09-09

### Changed

- Build chapter was slimmed down and most parts have been moved into the more
  dynamic wiki at Github.

## [1.2.1] - 2023-06-08

### Added

- Added dedicated MIDI chapter

### Changed

- Tweaks in most parts touching MIDI

### Removed

- Deprecated translations of the manual have been removed

## [1.2.0] - 2023-03-31

### Changed

- Repo was relicensed to GPLv2+
- Almost all images were updated to represent the new SVG-based UI of Hydrogen
- Various changes in the manual to match Hydrogen 1.2.0

## [1.1.0] - 2022-04-21

### Added

- Chunked version of manual and tutorial was introduced.
- Automated creation of most contained images in all supported languages using
  shotlists.
- CSS and JavaScript based styling of resulting HTML documents.

### Changed

- Manual was rewritten in large parts and updated to match the most recent
  behavior and graphics of hydrogen.
- Internationalization process was migrated from `xml2po` and `po2xml` to
  `itstool`, `msgmerge`, and `msgfmt`.
- Used `Docbook` version was updated from `4.0` to `4.5`.

### Deprecated

- Due to the large scale changes in the manual, all its translations have fallen
  into despair.
