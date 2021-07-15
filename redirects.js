/** @format */

// document.body.innerHTML = document.body.innerHTML.replace(/@/g, '@@@');

function getQueryParams(param) {
  // Construct URLSearchParams object instance from current URL querystring.
  var queryParams = new URLSearchParams(window.location.search);

  // Get existed parameter value.
  return queryParams.get(param);
}

document.addEventListener("DOMContentLoaded", async function () {
  var qrRedirectId = getQueryParams("qr");

  if (qrRedirectId) {
    var redirectUrl = qrRedirectId.filter((e) => e.id === qrRedirectId);

    if (redirectUrl) {
      // Do redirect
      document.location.href = redirectUrl[0].url;
    } else {
      document.location.href = "/designers/docs";
    }
  }
});

var static = "https://uploads-ssl.webflow.com/6027c95a14a2c5db06524e5c";

var redirects = [
  {
    id: "1E4005123010062100010024",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010056",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010053",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010059",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010045",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010058",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010050",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010047",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010046",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010051",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010134",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010054",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010048",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010057",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010049",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010127",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010129",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010097",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010128",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010076",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010055",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010089",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010103",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010114",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010073",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010113",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010091",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010083",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010104",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010084",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010100",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010117",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010125",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010107",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010085",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010082",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010122",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010111",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010079",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010110",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010096",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010098",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010087",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010120",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005123010062100010124",
    code: "KSGQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },

  {
    id: "1E4005124010062100020071",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020070",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020093",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020079",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020104",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020010",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020103",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020111",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020110",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020108",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020064",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020109",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020101",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020078",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020085",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020094",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020048",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020115",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020086",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020063",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020102",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020114",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020112",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020087",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "1E4005124010062100020095",
    code: "KSGQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },

  {
    id: "1E4005123110072100010183",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110042100010012",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110042100010009",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110042100010018",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010194",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010192",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010189",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010186",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010182",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010187",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010167",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110042100010004",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010188",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010191",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010164",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010009",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010165",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010190",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010193",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010034",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010023",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010011",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010128",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010035",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010024",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010036",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010037",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010029",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010025",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010012",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005123110072100010031",
    code: "KSGT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },

  {
    id: "1E4005124110042100020187",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020092",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110042100020186",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110042100020179",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110042100020180",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020095",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020083",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020084",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020072",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020074",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020096",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020063",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020086",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020101",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020097",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020082",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020094",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020025",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020024",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020014",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020047",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020011",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020032",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020035",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005124110072100020103",
    code: "KSGT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },

  {
    id: "1E4005126110042100040020",
    code: "KSGT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005126110042100040023",
    code: "KSGT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005126110042100040019",
    code: "KSGT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005126110072100040025",
    code: "KSGT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005126110072100040021",
    code: "KSGT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005126110042100040016",
    code: "KSGT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005126110072100040003",
    code: "KSGT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005126110072100040004",
    code: "KSGT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "1E4005126110072100040022",
    code: "KSGT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },

  {
    id: "1E4005123310082100010073",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010054",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010060",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010051",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010053",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010057",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010061",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010062",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010074",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010029",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010065",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010082",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010058",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010063",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010059",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010068",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010013",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010042",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010005",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010052",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010067",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010021",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005123310082100010049",
    code: "KSGU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },

  {
    id: "1E4005124310082100020041",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005124310082100020042",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005124310082100020035",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005124310082100020037",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005124310082100020068",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005124310082100020034",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005124310082100020036",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005124310082100020032",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005124310082100020009",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005124310082100020028",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005124310082100020018",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005124310082100020025",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005124310082100020026",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005124310082100020027",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005124310082100020039",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "1E4005124310082100020033",
    code: "KSGU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },

  {
    id: "1E4005125310082100030016",
    code: "KSGU50HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },

  {
    id: "0E4005623010062100030053",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030062",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030103",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030069",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030060",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030065",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030046",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030012",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030011",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030026",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030073",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030075",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030074",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030079",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030105",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030051",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030102",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030104",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030056",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030017",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030064",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030111",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030052",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030110",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030038",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030114",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030106",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030033",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030032",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030108",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030034",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030048",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030009",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030015",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030041",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030002",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030035",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030006",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030010",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030003",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030005",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030001",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005623010062100030066",
    code: "KSRQ26HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },

  {
    id: "0E4005624010062100040091",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040101",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040045",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040094",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040100",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040092",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040098",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040099",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040093",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040011",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040068",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040079",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040007",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040070",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040069",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040020",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040019",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040081",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040074",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040004",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040006",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040012",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040072",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040021",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },
  {
    id: "0E4005624010062100040087",
    code: "KSRQ35HZRN1",
    url: static + "/60c8fe5537f5ee23ce7aaaf2_1623748224223627-compressed.pdf",
  },

  {
    id: "0E4005123110072100050191",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050140",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050134",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050183",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050125",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050181",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050180",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050165",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050057",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050056",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050050",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050051",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050044",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050129",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110042100050015",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110042100050007",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050141",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050151",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050135",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050034",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050009",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050023",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050091",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110042100050012",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050149",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050150",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050038",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050010",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110042100050014",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005123110072100050039",
    code: "KSRT26HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },

  {
    id: "0E4005124110042100060018",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110042100060012",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110042100060017",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060148",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060025",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060031",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060142",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110042100060007",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060107",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060176",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060174",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060180",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060104",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060098",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060186",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060177",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060175",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060121",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060123",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060017",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060011",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060015",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060005",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060183",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005124110072100060189",
    code: "KSRT35HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },

  {
    id: "0E4005126110042100080017",
    code: "KSRT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005126110042100080016",
    code: "KSRT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005126110072100080023",
    code: "KSRT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005126110072100080022",
    code: "KSRT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005126110072100080009",
    code: "KSRT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005126110072100080017",
    code: "KSRT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005126110072100080024",
    code: "KSRT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005126110072100080016",
    code: "KSRT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },
  {
    id: "0E4005126110042100080015",
    code: "KSRT61HZRN1",
    url: static + "/60c8fdf15ec1d97e0e5e61dc_1623748224228293-compressed.pdf",
  },

  {
    id: "0E4005123310082100050064",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050010",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050086",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050011",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050006",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050016",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050062",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050005",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050023",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050012",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050037",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050090",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050032",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050052",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050038",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050051",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050029",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050028",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050021",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050025",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050030",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005123310082100050024",
    code: "KSRU26HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },

  {
    id: "0E4005124310082100060035",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005124310082100060048",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005124310082100060034",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005124310082100060033",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005124310082100060037",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005124310082100060002",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005124310082100060039",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005124310082100060038",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005124310082100060029",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005124310082100060031",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005124310082100060030",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005124310082100060026",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005124310082100060021",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005124310082100060024",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005124310082100060020",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005124310082100060001",
    code: "KSRU35HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
  {
    id: "0E4005125310082100070034",
    code: "KSRU50HZRN1",
    url: static + "/60c8fe3a9036bd817620f90c_1623748239307237-compressed.pdf",
  },
];
