var game = {
  1: {
    id: "splash",
    type: "start",
    options: [
      {
        1: "id-as",
        next: 2
      },
      {
        2: "id-as",
        next: 2
      },
      {
        3: "id-as",
        next: 2
      }
    ]
  },
  2: {
    id: "id-as",
    type: "playing",
    options: [
      {
        1: "id-black-trans",
        next: 3
      },
      {
        2: "id-trans",
        next: 4
      },
      {
        3: "id-cis",
        next: 5
      }
    ]
  },
  3: {
    id: "id-black-trans",
    type: "playing",
    options: [
      {
        1: "ancestor-protection",
        next: 6
      },
      {
        2: "ancestor-care",
        next: 7
      },
      {
        3: "ancestor-strength",
        next: 8
      }
    ]
  },
  4: {
    id: "id-trans",
    type: "playing",
    options: [
      {
        1: "resurrect",
        next: 9
      },
      {
        2: "do-not-agree",
        next: 13
      },
      {
        3: "none",
        next: 0
      }
    ]
  },
  5: {
    id: "id-cis",
    type: "playing",
    options: [
      {
        1: "cis-agree",
        next: 14
      },
      {
        2: "do-not-agree",
        next: 13
      },
      {
        3: "none",
        next: 0
      }
    ]
  },
  6: {
    id: "ancestor-protection",
    type: "advanceto",
    options: [
      {
        1: "start-journey",
        next: 19
      },
      {
        2: "start-journey",
        next: 19
      },
      {
        3: "start-journey",
        next: 19
      }
    ]
  },
  7: {
    id: "ancestor-care",
    type: "advanceto",
    options: [
      {
        1: "start-journey",
        next: 19
      },
      {
        2: "start-journey",
        next: 19
      },
      {
        3: "start-journey",
        next: 19
      }
    ]
  },
  8: {
    id: "ancestor-strength",
    type: "advanceto",
    options: [
      {
        1: "start-journey",
        next: 19
      },
      {
        2: "start-journey",
        next: 19
      },
      {
        3: "start-journey",
        next: 19
      }
    ]
  },
  9: {
    id: "resurrect",
    type: "playing",
    options: [
      {
        1: "resurrect-yes",
        next: 10
      },
      {
        2: "resurrect-no",
        next: 11
      },
      {
        3: "do-not-agree",
        next: 13
      }
    ]
  },
  10: {
    id: "resurrect-yes",
    type: "advanceto",
    options: [
      {
        1: "resurrect-one",
        next: 12
      },
      {
        2: "resurrect-one",
        next: 12
      },
      {
        3: "resurrect-one",
        next: 12
      }
    ]
  },
  11: {
    id: "resurrect-no",
    type: "gameover",
    options: [
      {
        1: "credits",
        next: 48
      },
      {
        2: "credits",
        next: 48
      },
      {
        3: "credits",
        next: 48
      }
    ]
   },
   12: {
     id: "resurrect-one",
     type: "advanceto",
     options: [
       {
         1: "start-journey",
         next: 19
       },
       {
         2: "start-journey",
         next: 19
       },
       {
         3: "start-journey",
         next: 19
       }
     ]
    },
    13: {
      id: "do-not-agree",
      type: "gameover",
      options: [
        {
          1: "credits",
          next: 48
        },
        {
          2: "credits",
          next: 48
        },
        {
          3: "credits",
          next: 48
        }
      ]
    },
    14: {
      id: "cis-agree",
      type: "playing",
      options: [
        {
          1: "privilege-none",
          next: 15
        },
        {
          2: "privilege-unsure",
          next: 16
        },
        {
          3: "privilege-help",
          next: 17
        }
      ]
    },
    15: {
      id: "privilege-none",
      type: "advanceto",
      options: [
        {
          1: "cis-deadname",
          next: 18
        },
        {
          2: "cis-deadname",
          next: 18
        },
        {
          3: "cis-deadname",
          next: 18
        }
      ]
    },
    16: {
      id: "privilege-unsure",
      type: "advanceto",
      options: [
        {
          1: "cis-deadname",
          next: 18
        },
        {
          2: "cis-deadname",
          next: 18
        },
        {
          3: "cis-deadname",
          next: 18
        }
      ]
    },
    17: {
      id: "privilege-help",
      type: "advanceto",
      options: [
        {
          1: "cis-deadname",
          next: 18
        },
        {
          2: "cis-deadname",
          next: 18
        },
        {
          3: "cis-deadname",
          next: 18
        }
      ]
    },
    18: {
      id: "cis-deadname",
      type: "advanceto",
      options: [
        {
          1: "security-team",
          next: 26
        },
        {
          2: "security-team",
          next: 26
        },
        {
          3: "security-team",
          next: 26
        }
      ]
    },
    19: {
      id: "start-journey",
      type: "playing",
      options: [
        {
          1: "body-choice",
          next: 20
        },
        {
          2: "continue-forward",
          next: 44
        },
        {
          3: "trans-spa",
          next: 38
        }
      ]
    },
    20: {
      id: "body-choice",
      type: "playing",
      options: [
        {
          1: "pee-in-peace",
          next: 22
        },
        {
          2: "security-team",
          next: 26
        },
        {
          3: "lift-weights",
          next: 21
        }
      ]
    },
    21: {
      id: "lift-weights",
      type: "advanceto",
      options: [
        {
          1: "continue-forward",
          next: 44
        },
        {
          2: "continue-forward",
          next: 44
        },
        {
          3: "continue-forward",
          next: 44
        }
      ]
    },
    22: {
      id: "pee-in-peace",
      type: "playing",
      options: [
        {
          1: "cubicle-left",
          next: 23
        },
        {
          2: "cubicle-center",
          next: 24
        },
        {
          3: "cubicle-right",
          next: 25
        }
      ]
    },
    23: {
      id: "cubicle-left",
      type: "advanceto",
      options: [
        {
          1: "continue-forward",
          next: 44
        },
        {
          2: "continue-forward",
          next: 44
        },
        {
          3: "continue-forward",
          next: 44
        }
      ]
    },
    24: {
      id: "cubicle-center",
      type: "advanceto",
      options: [
        {
          1: "continue-forward",
          next: 44
        },
        {
          2: "continue-forward",
          next: 44
        },
        {
          3: "continue-forward",
          next: 44
        }
      ]
    },
    25: {
      id: "cubicle-right",
      type: "advanceto",
      options: [
        {
          1: "continue-forward",
          next: 44
        },
        {
          2: "continue-forward",
          next: 44
        },
        {
          3: "continue-forward",
          next: 44
        }
      ]
    },
    26: {
      id: "security-team",
      type: "playing",
      options: [
        {
          1: "security-1",
          next: 27
        },
        {
          2: "security-2",
          next: 28
        },
        {
          3: "security-3",
          next: 29
        }
      ]
    },
    27: {
      id: "security-1",
      type: "advanceto",
      options: [
        {
          1: "continue-forward",
          next: 44
        },
        {
          2: "continue-forward",
          next: 44
        },
        {
          3: "continue-forward",
          next: 44
        }
      ]
    },
    28: {
      id: "security-2",
      type: "playing",
      options: [
        {
          1: "path-2-left",
          next: 30
        },
        {
          2: "path-2-right",
          next: 31
        },
        {
          3: "none",
          next: 0
        }
      ]
    },
    29: {
      id: "security-3",
      type: "playing",
      options: [
        {
          1: "boss-1",
          next: 35
        },
        {
          2: "boss-2",
          next: 36
        },
        {
          3: "boss-3",
          next: 37
        }
      ]
    },
    30: {
      id: "path-2-left",
      type: "playing",
      options: [
        {
          1: "dead-name-1",
          next: 32
        },
        {
          2: "dead-name-2",
          next: 33
        },
        {
          3: "dead-name-3",
          next: 34
        }
      ]
    },
    31: {
      id: "path-2-right",
      type: "gameover",
      options: [
        {
          1: "credits",
          next: 48
        },
        {
          2: "credits",
          next: 48
        },
        {
          3: "credits",
          next: 48
        }
      ]
    },
    32: {
      id: "dead-name-1",
      type: "gameover",
      options: [
        {
          1: "credits",
          next: 48
        },
        {
          2: "credits",
          next: 48
        },
        {
          3: "credits",
          next: 48
        }
      ]
    },
    33: {
      id: "dead-name-2",
      type: "gameover",
      options: [
        {
          1: "credits",
          next: 48
        },
        {
          2: "credits",
          next: 48
        },
        {
          3: "credits",
          next: 48
        }
      ]
    },
    34: {
      id: "dead-name-3",
      type: "gameover",
      options: [
        {
          1: "credits",
          next: 48
        },
        {
          2: "credits",
          next: 48
        },
        {
          3: "credits",
          next: 48
        }
      ]
    },
    35: {
      id: "boss-1",
      type: "gameover",
      options: [
        {
          1: "credits",
          next: 48
        },
        {
          2: "credits",
          next: 48
        },
        {
          3: "credits",
          next: 48
        }
      ]
    },
    36: {
      id: "boss-2",
      type: "advanceto",
      options: [
        {
          1: "continue-forward",
          next: 44
        },
        {
          2: "continue-forward",
          next: 44
        },
        {
          3: "continue-forward",
          next: 44
        }
      ]
    },
    37: {
      id: "boss-3",
      type: "gameover",
      options: [
        {
          1: "credits",
          next: 48
        },
        {
          2: "credits",
          next: 48
        },
        {
          3: "credits",
          next: 48
        }
      ]
    },
    38: {
      id: "trans-spa",
      type: "playing",
      options: [
        {
          1: "trans-spa-1",
          next: 39
        },
        {
          2: "trans-spa-2",
          next: 40
        },
        {
          3: "trans-spa-3",
          next: 41
        }
      ]
    },
    39: {
      id: "trans-spa-1",
      type: "advanceto",
      options: [
        {
          1: "continue-forward",
          next: 44
        },
        {
          2: "continue-forward",
          next: 44
        },
        {
          3: "continue-forward",
          next: 44
        }
      ]
    },
    40: {
      id: "trans-spa-2",
      type: "playing",
      options: [
        {
          1: "spa-select-1",
          next: 42
        },
        {
          2: "spa-select-2",
          next: 43
        },
        {
          3: "continue-forward",
          next: 44
        }
      ]
    },
    41: {
      id: "trans-spa-3",
      type: "advanceto",
      options: [
        {
          1: "continue-forward",
          next: 44
        },
        {
          2: "continue-forward",
          next: 44
        },
        {
          3: "continue-forward",
          next: 44
        }
      ]
    },
    42: {
      id: "spa-select-1",
      type: "advanceto",
      options: [
        {
          1: "continue-forward",
          next: 44
        },
        {
          2: "continue-forward",
          next: 44
        },
        {
          3: "continue-forward",
          next: 44
        }
      ]
    },
    43: {
      id: "spa-select-2",
      type: "advanceto",
      options: [
        {
          1: "continue-forward",
          next: 44
        },
        {
          2: "continue-forward",
          next: 44
        },
        {
          3: "continue-forward",
          next: 44
        }
      ]
    },
    44: {
      id: "continue-forward",
      type: "playing",
      options: [
        {
          1: "continue-dead-name",
          next: 45
        },
        {
          2: "continue-trans-temple",
          next: 46
        },
        {
          3: "continue-cis-city",
          next: 47
        }
      ]
    },
    45: {
      id: "continue-dead-name",
      type: "playing",
      options: [
        {
          1: "dead-name-1",
          next: 32
        },
        {
          2: "dead-name-2",
          next: 33
        },
        {
          3: "dead-name-3",
          next: 34
        }
      ]
    },
    46: {
      id: "continue-tran-temple",
      type: "gameover",
      options: [
        {
          1: "credits",
          next: 48
        },
        {
          2: "credits",
          next: 48
        },
        {
          3: "credits",
          next: 48
        }
      ]
    },
    47: {
      id: "continue-cis-city",
      type: "gameover",
      options: [
        {
          1: "credits",
          next: 48
        },
        {
          2: "credits",
          next: 48
        },
        {
          3: "credits",
          next: 48
        }
      ]
    },
    48: {
      id: "credits",
      type: "restart",
      options: [
        {
          1: "splash",
          next: 1
        },
        {
          2: "splash",
          next: 1
        },
        {
          3: "splash",
          next: 1
        }
      ]
    }

};
