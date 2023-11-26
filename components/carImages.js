export const carImages = (carName) => {
    switch (carName) {
      case "TeslaS":
        return {
          uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSW,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=1&crop=1300,500,300,300&",
        };
      case "Tesla3":
        return {
          uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PMNG,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&",
        };
      case "TeslaX":
        return {
          uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX15,$PPSW,$WX00,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&",
        };
      case "TeslaY":
        return {
          uri: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY19,$PMNG,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&",
        };
    }
  };