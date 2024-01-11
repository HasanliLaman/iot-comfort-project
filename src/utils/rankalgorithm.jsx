// temp, hum, noise

export const getScores = (RoomCriteriaMat, criteriaMat) => {
  //variables needed
  let n = RoomCriteriaMat[0].length;
  const tempMax = 25;
  const tempMin = 21;
  const humMax = 70;
  const humMin = 40;
  const noiseMax = 60;
  const noiseMin = 0;
  const lightMax = 90;
  const lightMin = 50;

  //Normalization of the values in a matrix
  let RoomCriteriaNormalized = [];
  //normalize temperature
  RoomCriteriaNormalized[0] = [];
  for (let i = 0; i < n; i++) {
    const x = (RoomCriteriaMat[0][i] - tempMin) / (tempMax - tempMin);
    if (x < 0 || x > 1) {
      RoomCriteriaNormalized[0][i] = 0;
    } else {
      RoomCriteriaNormalized[0][i] = x;
    }
  }

  //normalize humidity
  RoomCriteriaNormalized[1] = [];
  for (let i = 0; i < n; i++) {
    const x = (RoomCriteriaMat[1][i] - humMin) / (humMax - humMin);
    if (x < 0 || x > 1) {
      RoomCriteriaNormalized[1][i] = 0;
    } else {
      RoomCriteriaNormalized[1][i] = x;
    }
  }

  //normalize noise
  RoomCriteriaNormalized[2] = [];
  for (let i = 0; i < n; i++) {
    const x = (RoomCriteriaMat[2][i] - noiseMin) / (noiseMax - noiseMin);
    if (x < 0 || x > 1) {
      RoomCriteriaNormalized[2][i] = 0;
    } else {
      RoomCriteriaNormalized[2][i] = x;
    }
  }

  //normalize light
  RoomCriteriaNormalized[3] = [];
  for (let i = 0; i < n; i++) {
    const x = (RoomCriteriaMat[3][i] - lightMin) / (lightMax - lightMin);
    if (x < 0 || x > 1) {
      RoomCriteriaNormalized[3][i] = 0;
    } else {
      RoomCriteriaNormalized[3][i] = x;
    }
  }

  //create weight for each criteria accoring to its importance
  var sum = criteriaMat.reduce((a, b) => a + b, 0);
  const criteriaNormalized = [];
  for (let i = 0; i < criteriaMat.length; i++) {
    criteriaNormalized[i] = criteriaMat[i] / sum;
  }

  //give a score to each room
  let scores = [];
  for (let j = 0; j < n; j++) {
    let RoomScore = 0;
    for (let i = 0; i < criteriaMat.length; i++) {
      //for each room we calculate the score
      RoomScore += RoomCriteriaNormalized[i][j] * criteriaNormalized[i];
    }
    scores[j] = RoomScore;
  }

  return scores;
};

export const getDataWithScores = (data, criteria) => {
  const tempArr = data.map((room) => room.temperature);
  const soundArr = data.map((room) => room.soundSensor);
  const humidityArr = data.map((room) => room.humidity);
  const lightArr = data.map((room) => room.lightIntensity);

  const sensorsMat = [tempArr, humidityArr, soundArr, lightArr];
  const scores = getScores(sensorsMat, criteria);
  const dataWithScores = data.map((room, index) => {
    return { ...room, score: scores[index] };
  });
  const sortedData = dataWithScores.sort((a, b) => b.score - a.score);
  return sortedData;
};
