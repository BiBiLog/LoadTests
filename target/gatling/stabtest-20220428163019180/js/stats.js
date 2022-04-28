var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60250",
        "ok": "21490",
        "ko": "38760"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "222"
    },
    "maxResponseTime": {
        "total": "14250",
        "ok": "14250",
        "ko": "9747"
    },
    "meanResponseTime": {
        "total": "2811",
        "ok": "1616",
        "ko": "3473"
    },
    "standardDeviation": {
        "total": "2342",
        "ok": "3104",
        "ko": "1398"
    },
    "percentiles1": {
        "total": "2772",
        "ok": "2",
        "ko": "3127"
    },
    "percentiles2": {
        "total": "3947",
        "ok": "1578",
        "ko": "4136"
    },
    "percentiles3": {
        "total": "7295",
        "ok": "8947",
        "ko": "6263"
    },
    "percentiles4": {
        "total": "9766",
        "ok": "11135",
        "ko": "7716"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15967,
    "percentage": 27
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 41,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5482,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 38760,
    "percentage": 64
},
    "meanNumberOfRequestsPerSecond": {
        "total": "482",
        "ok": "171.92",
        "ko": "310.08"
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
        "total": "60250",
        "ok": "21490",
        "ko": "38760"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "222"
    },
    "maxResponseTime": {
        "total": "14250",
        "ok": "14250",
        "ko": "9747"
    },
    "meanResponseTime": {
        "total": "2811",
        "ok": "1616",
        "ko": "3473"
    },
    "standardDeviation": {
        "total": "2342",
        "ok": "3104",
        "ko": "1398"
    },
    "percentiles1": {
        "total": "2772",
        "ok": "2",
        "ko": "3127"
    },
    "percentiles2": {
        "total": "3947",
        "ok": "1578",
        "ko": "4137"
    },
    "percentiles3": {
        "total": "7295",
        "ok": "8947",
        "ko": "6263"
    },
    "percentiles4": {
        "total": "9766",
        "ok": "11135",
        "ko": "7716"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15967,
    "percentage": 27
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 41,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5482,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 38760,
    "percentage": 64
},
    "meanNumberOfRequestsPerSecond": {
        "total": "482",
        "ok": "171.92",
        "ko": "310.08"
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
