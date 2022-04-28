var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "150000",
        "ok": "45852",
        "ko": "104148"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "1866"
    },
    "maxResponseTime": {
        "total": "59080",
        "ok": "59080",
        "ko": "56723"
    },
    "meanResponseTime": {
        "total": "31397",
        "ok": "19392",
        "ko": "36683"
    },
    "standardDeviation": {
        "total": "16365",
        "ok": "16830",
        "ko": "13025"
    },
    "percentiles1": {
        "total": "38299",
        "ok": "20231",
        "ko": "41110"
    },
    "percentiles2": {
        "total": "44146",
        "ok": "32774",
        "ko": "45403"
    },
    "percentiles3": {
        "total": "49138",
        "ok": "47421",
        "ko": "49476"
    },
    "percentiles4": {
        "total": "51768",
        "ok": "51304",
        "ko": "51902"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15915,
    "percentage": 11
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 29933,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 104148,
    "percentage": 69
},
    "meanNumberOfRequestsPerSecond": {
        "total": "627.615",
        "ok": "191.849",
        "ko": "435.766"
    }
},
contents: {
"req_new-order-a83f2": {
        type: "REQUEST",
        name: "new order",
path: "new order",
pathFormatted: "req_new-order-a83f2",
stats: {
    "name": "new order",
    "numberOfRequests": {
        "total": "150000",
        "ok": "45852",
        "ko": "104148"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "1866"
    },
    "maxResponseTime": {
        "total": "59080",
        "ok": "59080",
        "ko": "56723"
    },
    "meanResponseTime": {
        "total": "31397",
        "ok": "19392",
        "ko": "36683"
    },
    "standardDeviation": {
        "total": "16365",
        "ok": "16830",
        "ko": "13025"
    },
    "percentiles1": {
        "total": "38301",
        "ok": "20244",
        "ko": "41112"
    },
    "percentiles2": {
        "total": "44148",
        "ok": "32786",
        "ko": "45402"
    },
    "percentiles3": {
        "total": "49137",
        "ok": "47421",
        "ko": "49477"
    },
    "percentiles4": {
        "total": "51770",
        "ok": "51304",
        "ko": "51899"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15915,
    "percentage": 11
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 29933,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 104148,
    "percentage": 69
},
    "meanNumberOfRequestsPerSecond": {
        "total": "627.615",
        "ok": "191.849",
        "ko": "435.766"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
