IF(MINGW)
  INSTALL( FILES ${CMAKE_SOURCE_DIR}/data/doc/manual_en.html
    ${CMAKE_SOURCE_DIR}/data/doc/tutorial_en.html
    ${CMAKE_SOURCE_DIR}/data/doc/tutorial_fr.html
    ${CMAKE_SOURCE_DIR}/data/doc/tutorial_it.html
    DESTINATION "data/doc" )
  INSTALL( DIRECTORY ${CMAKE_SOURCE_DIR}/data/doc/img_tutorial
    DESTINATION "data/doc" )
  INSTALL( DIRECTORY ${CMAKE_SOURCE_DIR}/data/doc/img DESTINATION "data/doc"
    FILES_MATCHING PATTERN "*.png" PATTERN "*.svg"
    PATTERN "*generated_ca/*" EXCLUDE
    PATTERN "*generated_de/*" EXCLUDE
    PATTERN "*generated_es/*" EXCLUDE
    PATTERN "*generated_fr/*" EXCLUDE
    PATTERN "*generated_it/*" EXCLUDE
    PATTERN "*generated_nl/*" EXCLUDE )
  INSTALL( FILES ${CMAKE_SOURCE_DIR}/data/doc/res/docbook.css
    ${CMAKE_SOURCE_DIR}/data/doc/res/docbook.js
    ${CMAKE_SOURCE_DIR}/data/doc/res/LICENSE
    DESTINATION "data/doc/res" )
ELSE()
  # Install only the English version of the manual and all verions of
  # the tutorial. The latter is not covered using DIRECTORY and
  # PATTERN as this also would create a number of unnecessary
  # subfolders.
  INSTALL( FILES ${CMAKE_SOURCE_DIR}/data/doc/manual_en.html
    ${CMAKE_SOURCE_DIR}/data/doc/tutorial_en.html
    ${CMAKE_SOURCE_DIR}/data/doc/tutorial_fr.html
    ${CMAKE_SOURCE_DIR}/data/doc/tutorial_it.html
    DESTINATION ${H2_SYS_PATH}/data/doc )
  INSTALL( DIRECTORY ${CMAKE_SOURCE_DIR}/data/doc/img_tutorial
    DESTINATION ${H2_SYS_PATH}/data/doc )
  # Install only images used in the English version of the manual.
  # This command also creates subfolders for all the generated dirs
  # excluded below. Though they will be empty, it's still a little bit
  # annoying. But it is a small price to pay for leaving the overall
  # structure intact and easing development.
  INSTALL( DIRECTORY ${CMAKE_SOURCE_DIR}/data/doc/img DESTINATION ${H2_SYS_PATH}/data/doc
    FILES_MATCHING PATTERN "*.png" PATTERN "*.svg"
    PATTERN "*generated_ca/*" EXCLUDE
    PATTERN "*generated_de/*" EXCLUDE
    PATTERN "*generated_es/*" EXCLUDE
    PATTERN "*generated_fr/*" EXCLUDE
    PATTERN "*generated_it/*" EXCLUDE
    PATTERN "*generated_nl/*" EXCLUDE )
  # Add further resources required by the English manual
  INSTALL( FILES ${CMAKE_SOURCE_DIR}/data/doc/res/docbook.css
    ${CMAKE_SOURCE_DIR}/data/doc/res/docbook.js
    ${CMAKE_SOURCE_DIR}/data/doc/res/LICENSE
    DESTINATION ${H2_SYS_PATH}/data/doc/res )
ENDIF()

