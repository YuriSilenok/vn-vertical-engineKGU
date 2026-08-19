window.STORY_TEXT = `

[meta]
title = "360-экскурсия"
projectId = student360demo
startScene = intro
lang = ru
mode = release
window = auto
autosave = true
transition = fade
transitionMs = 180
bg360Quality = auto
engine.gameSandbox = strict

[bg]
introBg file=assets/backgrounds/bg-campus-hall.jpg

[scene]
scene intro
bg introBg
"Тестовый текст начала экскурсии"
goto360 main360.139 entry=default
goto after360

scene after360
bg introBg
"Экскурсия завершена."
"Теперь можно продолжить обычную часть новеллы."
`;
