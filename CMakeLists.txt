add_custom_command(OUTPUT
    "${CMAKE_SOURCE_DIR}/data/doc/manual_en.html"
    "${CMAKE_SOURCE_DIR}/data/doc/tutorial_en.html"
    "${CMAKE_SOURCE_DIR}/data/doc/tutorial_fr.html"
    "${CMAKE_SOURCE_DIR}/data/doc/tutorial_it.html"
  COMMAND "\$(MAKE)"
  ARGS "manual_en.html" "tutorial_en.html"
    "tutorial_fr.html" "tutorial_it.html" "clean_auxiliaries"
  WORKING_DIRECTORY "${CMAKE_SOURCE_DIR}/data/doc"
)

add_custom_target(generate_documentation ALL
  DEPENDS
    "${CMAKE_SOURCE_DIR}/data/doc/manual_en.html"
    "${CMAKE_SOURCE_DIR}/data/doc/tutorial_en.html"
    "${CMAKE_SOURCE_DIR}/data/doc/tutorial_fr.html"
    "${CMAKE_SOURCE_DIR}/data/doc/tutorial_it.html"
)

if(MINGW)
  set(INSTALL_DIR "data/doc")
else()
  set(INSTALL_DIR "${H2_SYS_PATH}/data/doc")
endif()

install(FILES
    "${CMAKE_SOURCE_DIR}/data/doc/manual_en.html"
    "${CMAKE_SOURCE_DIR}/data/doc/tutorial_en.html"
    "${CMAKE_SOURCE_DIR}/data/doc/tutorial_fr.html"
    "${CMAKE_SOURCE_DIR}/data/doc/tutorial_it.html"
  DESTINATION "${INSTALL_DIR}")
install(DIRECTORY ${CMAKE_SOURCE_DIR}/data/doc/img_tutorial
  DESTINATION "${INSTALL_DIR}")
install(DIRECTORY ${CMAKE_SOURCE_DIR}/data/doc/img DESTINATION "${INSTALL_DIR}"
  FILES_MATCHING PATTERN "*.png" PATTERN "*.svg"
  PATTERN "*generated_ca/*" EXCLUDE
  PATTERN "*generated_de/*" EXCLUDE
  PATTERN "*generated_es/*" EXCLUDE
  PATTERN "*generated_fr/*" EXCLUDE
  PATTERN "*generated_it/*" EXCLUDE
  PATTERN "*generated_nl/*" EXCLUDE)
install(FILES ${CMAKE_SOURCE_DIR}/data/doc/res/docbook.css
  ${CMAKE_SOURCE_DIR}/data/doc/res/docbook.js
  ${CMAKE_SOURCE_DIR}/data/doc/res/LICENSE
  DESTINATION "${INSTALL_DIR}")
