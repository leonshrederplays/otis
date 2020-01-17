# Otis [Finished]

## Bot für Martin/KitTV
Bot für Discord der verschiedene Funktionen erfüllt.
* Discord: [KitTV](https://discord.gg/wCDAsCp)

## Index
1. [Dependencies / Node modules](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#dependencies--node-modules)
2. [How to install Node Modules](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#how-to-install-node-modules)
    * [Discord.js](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#discordjs)
    * [FFMPEG-Binaries](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#ffmpeg-binaries)
    * [Node-Opus](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#node-opus)
    * [Opusscript](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#opusscript)
    * [Simple-YouTube-API](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#simple-youtube-api)
    * [YTDL-Core](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#ytdl-core)
3. [Config](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#config)
4. [Bot initialisiert](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#bot-initialisiert)
5. [User tritt Server bei](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#user-tritt-server-bei)
6. [Commands](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#commands)
    * [8Ball](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#8ball--aliases-ball)
    * [Avatar](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#avatar)
    * [Botinfo](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#botinfo--aliases-binfo)
    * [Clear](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#clear)
    * [Help](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#help)
    * [Listening](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#listening)
    * [Reload](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#reload)
    * [Say](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#say)
    * [Serverinfo](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#serverinfo)
    * [Statushelp](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#statushelp)
    * [Streaming](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#streaming)
    * [Switch](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#switch)
    * [Userinfo](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#userinfo)
    * [Watching](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#watching)
7. [Music Commands NOT WORKING]()
    * [Pause](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#pause)
    * [Play](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#play)
    * [Queue](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#queue)
    * [Search](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#search)
    * [Skip](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#skip)
    * [Stop](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#stop)
    * [Resume](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#resume)
    * [Volume](https://github.com/leonshrederplays/Otis-kittv/blob/master/README.md#volume)
  
## Dependencies / Node modules
* Node Modules
  * discord.js         | Version:^11.4.2
  * ffmpeg-binaries    | Version:^4.0.0
  * node-opus          | Version:^0.3.1
  * opusscript         | Version:0.0.6
  * simple-youtube-api | Version:^5.1.1
  * ytdl-core          | Version:^0.29.1
  
## How to install Node Modules
**NodeJS must be installed!**

#### Discord.js
* npm install discord.js

#### FFMPEG-Binaries
* npm install ffmpeg

#### Node-Opus
* npm install node-opus

#### Opusscript
* npm install opusscript

#### Simple-YouTube-API
* npm install simple-youtube-api

#### YTDL-Core
* npm install ytdl-core

## Config
* Prefix: "!" (Standard-Prefix)

## Bot initialisiert
* Playing-Status !help wird gesetzt.
* Online-Status wird gesetzt.

## User tritt Server bei
* Rolle "Flöhe" wird gesucht und dem neuen User hinzugefügt.

## Commands

#### 8ball / Aliases: ball
* Der Befehl "!8ball / !ball" gibt eine zufällige Antwort aus wenn mehrere Argumente angegeben wurden.

* Antwortmöglichkeiten
  * Ja², Nein², Das weiß ich nicht, Frag mich später noch mal², Vielleicht²

#### Avatar
* Gibt das Profilbild des getaggten Users als Nachricht in den Chat wieder.

#### Botinfo / Aliases: Binfo
* Der Befehl "!botinfo / !binfo" zeigt dir die Informationen über den Bot an.
  * Version: v3.2.4
  * Node JS: v10.5.0
  * Library: [Discord.js](https://discord.js.org/#/)
  * Server: Auf wievielen Servern der Bot ist.
  * Benutzer: Auf dem Server.
  * Website: Keine
  * Erstellt am: Wann der Bot erstellt wurde.
  * Developer: @Leon|ShrederPlays#2076
  * Discord: [KitTV](https://discord.gg/wCDAsCp)

#### Clear
* Der Befehl prüft auf das Recht MANAGE_MESSAGES wenn man das nicht hat schickt er eine Nachricht das man nicht die nötigen Rechte hat. Prüft ob der Parameter eine Zahl ist wenn nicht schickt er ebenfalls eine Nachricht raus. "!clear" löscht Nachrichten in der Anzahl die angegeben wurde. Bsp: !clear Fünf (Löscht Fünf Nachrichten.).

#### Help
* Der Befehl "!help" zeigt dir die Hilfe für alle Commands in einer DM an.
   * Wenn man hinter dem Befehl noch einen Parameter in Form einer der Gruppen angibt dann werden die Befehle herausgefiltert die nicht in der Gruppe sind.

#### Listening
* Der Befehl "!listening" stellt den Status auf Listening und den Text um.

#### Reload
* Der Befehl "!reload" mit einem Command als Parameter lädt den Command neu.
  * Vorher wird überprüft ob du die Administrator-Rechte hast.

#### Say
* Der Befehl "!say" gibt die Argumente die angegeben wurden wieder.
  * Vorher wird überprüft ob du die Rolle "Hundeguru" oder "Hundetrainer" hast.

#### Serverinfo
* Der Befehl "!serverinfo" zeigt dir die Serverinformationen an.
  * Server-Name: Server-Name
  * Benutzer: Wieviele User
  * Rollen: Wieviele Rollen
  * Webseite: Keine
  * Erstellt am: Wann der Server erstellt
  * You joined at: Wann du gejoint ist
  * Discord: [KitTV](https://discord.gg/wCDAsCp)

#### Statushelp
* Der Befehl "!statushelp" stellt den Status auf Online und den Text auf den !help Command.

#### Streaming
* Der Befehl "!streaming" stellt den Status auf Streaming und den Text um.

#### Switch
* Der Befehl "!switch" gibt der Bot eine Nachricht aus.

#### Userinfo
* Der Befehl "!userinfo" gibt eine Nachricht mit informationen über den User.
  * Benutzername: Username
  * Discriminator: 1234
  * Benutzer-ID: 123456789876543212
  * Status: Online
  * Spiel: Slime Rancher
  * Rolle: Everyone
  * Erstellt am: Wann der User seinen Account erstellt hat.
  * Discord: [KitTV](https://discord.gg/wCDAsCp)

#### Watching
* Der Befehl "!watching" stellt den Status auf Watching und den Text um.

## Music Commands [DEPRECATED/NOT WORKING/NOT FROM ME]

#### Pause
* Der Befehl "!pause" pausiert die Musik.

#### Play
* Der Befehl "!play" spielt Musik ab wenn ein YouTube Link angegeben wurde und fügt den Titel der Warteschlange hinzu.

#### Queue
* Der Befehl "!queue" zeigt dir die Lider an die in der Warteschlange sind.

#### Search
* Der Befehl "!search" lässt dich YouTube Videos suchen und nach eingabe der Zahl fügt er diese der Warteschlange hinzu.

#### Skip
* Der Befehl "!skip" überspringt das Lied was gerade läuft und geht zum nächsten Lied in der Warteschlange über.

#### Stop
* Der Befehl "!stop" stoppt die Musik und disconnected vom Channel.

#### Resume
* Der Befehl "!resume" startet die Wiedergabe wieder.

#### Volume
* Der Befehl "!volume" setzt die Lautstärke auf den angegebenen Integer.

