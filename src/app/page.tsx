import HomePage from './components/HomePage'

const radios = [
  { name: "Rock and Pop", url: "https://27593.live.streamtheworld.com/ROCKANDPOPAAC.aac?dist=triton-widget&tdsdk=js-2.9&swm=false&lat=-32.9&long=-62.4&pname=tdwidgets&pversion=2.9&banners=300x250%2C728x90&burst-time=15&sbmid=ef4971d5-74a0-4e8c-bbed-02f3b606d2eb" },
  { name: "ASPEN 102.3", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/ASPEN.mp3" },
  { name: "Vorterix Rock", url: "https://ice2.edge-apps.net/radio1_high-20057.audio" },
  { name: "radio free rock", url: "https://radioserver11.profesionalhosting.com:19250/live" },
  { name: "Radio Oldies Rock", url: "https://ice4.abradio.cz/oldiesrock128.mp3" },
  { name: "Finland Steel FM", url: "https://ice6.securenetsystems.net/STEELFM?playSessionID=C638EBD7-F2C3-BEA9-1BE25B178A37D1E3" },
  { name: "Scandinavian Satellite Radio", url: "https://stream.scansat.no/scansat_hq" },
  { name: "Myrock Danmark", url: "https://live-bauerdk.sharp-stream.com/myrock_dk_mp3" },
  { name: "Radio Drunk Norway", url: "https://node-33.zeno.fm/kg271rdzgm0uv" },
  { name: "Dansbandskanalen Sweden", url: "https://stream.dbmedia.se/dbk96" },
  { name: "Radio Sound Of Germany", url: "https://beautifulsounds.stream.laut.fm/beautifulsounds" },
  { name: "Hard Rock Heaven", url: "https://hydra.cdnstream.com/1521_128?" },
  { name: "Rock Hamburgo", url: "https://stream.laut.fm/radiorock?ref=radiode" },
  { name: "Radio Rock UK", url: "http://stream.radiojar.com/5exb2mtkunhvv" },
  { name: "Virgin Radio Lebanon Beirut", url: "https://stream.zeno.fm/dwxw3p9vea0uv" },
  { name: "RockZone České republiky", url: "https://icecast2.play.cz/rockzone128.mp3" },
  { name: "KizzRadio České republiky", url: "https://icecast4.play.cz/kissjc128.mp3" },
  { name: "RockMax České republiky", url: "https://ice.abradio.cz/rockmax128.mp3" },
  { name: "TheRock NZ", url: "https://digitalstreams.mediaworks.nz/rock_net_icy?Dist=TuneIn" },
  { name: "SA Rock Radio AU", url: "https://sarock.radioca.st/stream/1/" },
  { name: "TodayFM Ireland", url: "https://stream.audioxi.com/TDAAC" },
  { name: "103.2 DublinCity", url: "https://listen-dublincity.sharp-stream.com/dublin_city.mp3" },
  { name: "Ireland's clasic hits", url: "https://stream.audioxi.com/CLASSIC" },
  { name: "Radio 60 70 80", url: "https://ice.studiopiu.net/607080.aac" }
]

export default function Page() {
  return <HomePage radios={radios} />
}
