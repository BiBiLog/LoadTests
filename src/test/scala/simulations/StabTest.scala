package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef.http
import scenarios.Simulation.postOrdersScen

class StabTest extends Simulation {

  val httpConf = http.baseUrl("http://test:8080")
  setUp(
    postOrdersScen.inject(

      rampUsersPerSec(0).to(500).during(1),
      constantUsersPerSec(500).during(120)

    ).protocols(httpConf)

  )

}
