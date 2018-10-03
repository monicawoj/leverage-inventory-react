export default function getData(data, absoluteView, group) {

  if (absoluteView) {
    const self_data = [
      {
        data: {
          Networks: data.Network1 - 1,
          'Team-building': data.Team1 - 1,
          Exchange: data.Exchange1 - 1,
          Allocentrism: data.Allocentrism1 - 1,
          'Sit. Awareness': data.SA1 - 1,
          Agency: data.Agency1 - 1,
          Intentionality: data.Intentionality1 - 1,
          Logos: data.Logos1 - 1,
          Might: data.Might1 - 1,
          Ethos: data.Ethos1 - 1,
          Coalitions: data.Coalition1 - 1,
          Pathos: data.Pathos1 - 1,
        }
      }
    ];
    const third_data = [
      {
        data: {
          Networks: data.Network3 - 1,
          'Team-building': data.Team3 - 1,
          Exchange: data.Exchange3 - 1,
          Allocentrism: data.Allocentrism3 - 1,
          'Sit. Awareness': data.SA3 - 1,
          Agency: data.Agency3 - 1,
          Intentionality: data.Intentionality3 - 1,
          Logos: data.Logos3 - 1,
          Might: data.Might3 - 1,
          Ethos: data.Ethos3 - 1,
          Coalitions: data.Coalition3 - 1,
          Pathos: data.Pathos3 - 1,
        }
      }
    ];
    const sorted_self_data_temp = sortProperties(self_data[0].data);
    const sorted_self_data = sorted_self_data_temp.map(function(item) {
      return {"name":item[0], "value": item[1], "definition": matchDefinition(item[0])}
    });
    const sorted_third_data_temp=sortProperties(third_data[0].data);
    const sorted_third_data = sorted_third_data_temp.map(function(item) {
      return {"name":item[0], "value": item[1]}
    });
    console.log(third_data);
    return {
      selfData: self_data,
      thirdPartyData: third_data,
      sortedSelfData: sorted_self_data,
      sortedThirdPartyData: sorted_third_data
    };
} else {
    const self_data = [
        {
            "data": {
                "Networks": data["group_avgs"][group].Network1,
                "Team-building": data["group_avgs"][group].Team1,
                "Exchange": data["group_avgs"][group].Exchange1,
                "Allocentrism": data["group_avgs"][group].Allocentrism1,
                "Sit. Awareness": data["group_avgs"][group].SA1,
                "Agency": data["group_avgs"][group].Agency1,
                "Intentionality": data["group_avgs"][group].Intentionality1,
                "Logos": data["group_avgs"][group].Logos1,
                "Might": data["group_avgs"][group].Might1,
                "Ethos": data["group_avgs"][group].Ethos1,
                "Coalitions": data["group_avgs"][group].Coalition1,
                "Pathos": data["group_avgs"][group].Pathos1,
            }
        }
    ];
    const third_data = [
        {
            "data": {
                "Networks": data["group_avgs"][group].Network3,
                "Team-building": data["group_avgs"][group].Team3,
                "Exchange": data["group_avgs"][group].Exchange3,
                "Allocentrism": data["group_avgs"][group].Allocentrism3,
                "Sit. Awareness": data["group_avgs"][group].SA3,
                "Agency": data["group_avgs"][group].Agency3,
                "Intentionality": data["group_avgs"][group].Intentionality3,
                "Logos": data["group_avgs"][group].Logos3,
                "Might": data["group_avgs"][group].Might3,
                "Ethos": data["group_avgs"][group].Ethos3,
                "Coalitions": data["group_avgs"][group].Coalition3,
                "Pathos": data["group_avgs"][group].Pathos3,
            },
            "Submissions": data["group_avgs"][group].Submissions
        }
    ];
    const sorted_self_data_temp=sortProperties(self_data[0].data);
    const sorted_self_data = sorted_self_data_temp.map(function(item) {
      return {"name":item[0], "value": item[1]}
    });
    const sorted_third_data_temp=sortProperties(third_data[0].data);
    const sorted_third_data = sorted_third_data_temp.map(function(item) {
      return {"name":item[0], "value": item[1]}
    });
    console.log(third_data);
    return {
      selfData: self_data,
      thirdPartyData: third_data,
      sortedSelfData: sorted_self_data,
      sortedThirdPartyData: sorted_third_data
    };
}
}

function sortProperties(obj) {
  // convert object into array
  let sortable=[];
  for(let key in obj)
  	if (obj.hasOwnProperty(key))
  		sortable.push([key, obj[key]]); // each item is an array in format [key, value]

  // sort items by value
  sortable.sort((a, b) => {
    return a[1] - b[1]; // compare numbers
  });
  return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}

function matchDefinition(name) {
  const definitions = {
    "Networks": "Cultivates a broad, disparate network.",
    "Team-building": "Builds cohesive groups. Strongly connected to organizational culture and socialization.",
    "Exchange": "Trades favors and concessions. Bargains. Connected more broadly to reciprocity.",
    "Allocentrism": "An “other” orientation. Actively seeks others’ interests, and considers their preferences. The opposite of ego‐centrism.",
    "Sit. Awareness": "Sensitive to how timing, priorities, risk and other factors vary with context.",
    "Agency": "Shapes situations. Influences circumstances to suit needs, challenges status quo, accepts little as fixed.",
    "Intentionality": "Acting with a goal in mind. Relentless pursuit of goals, eschewing distractions and secondary rewards.",
    "Logos": "Uses logical reasons, expertise or data to convince or persuade others.",
    "Might": "A willingness to use coercive power. More generally, an ability to address difficult issues and tolerate conflict.",
    "Ethos": "Establishes personal credibility through credentials, commonality and “decorum”, i.e., meeting others\’ expectations.",
    "Coalitions": "Identifies and builds support among key people.",
    "Pathos": "Conveys messages in a way that has emotional resonance."
  }
  return definitions[name]
}
