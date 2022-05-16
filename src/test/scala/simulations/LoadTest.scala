package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef.http
import scenarios.Simulation.postOrdersScen

class LoadTest extends Simulation {

  val httpConf = http.baseUrl("dip_web")
  setUp(
    postOrdersScen.inject(
      /*
      heavisideUsers(1000) during(10)
      */


      //rampUsers(1000) during(50) //rate равномерное распределение на during
      //constantUsersPerSec(10).during(120)//каждую during будут появлятся rate
      //rampUsersPerSec(100).to(150).during(30).randomized // Пользователи будут вводиться с рандомизированными интервалами
      //constantUsersPerSec(100).during(10).randomized //Пользователи будут вводиться с рандомизированными интервалами
      //atOnceUsers(1000)//одновременно
      //heavisideUsers(9000) during(60)// rate поднимается постепенно в течении during

      /*
      rampUsersPerSec(0).to(100).during(60),
      constantUsersPerSec(100).during(120)
      */


      incrementUsersPerSec(1)
       .times(10)
       .eachLevelLasting(10)
       .separatedByRampsLasting(1)
       .startingFrom(0)


    ).protocols(httpConf)

  )

}
