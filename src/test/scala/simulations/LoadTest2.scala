package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef.http
import scenarios.Simulation.postOrdersScen

class LoadTest2 extends Simulation {

  val httpConf = http.baseUrl("http://test:8080")
  setUp(
    postOrdersScen.inject(

      heavisideUsers(1000) during(60)

    ).protocols(httpConf)

  )

}