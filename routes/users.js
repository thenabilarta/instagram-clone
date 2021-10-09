const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

const devices = [
  {
    DeviceId: "UI115",
    DeviceMetadata: {
      DeviceName: "Light015",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 102,
        DeviceCoordinates: {
          Latitude: 22.279902,
          Longitude: 114.189674,
        },
      },
      DeviceGroup: "1",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:44:54.356000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:44:54.356000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Online",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:47.529523+00:00",
      LastSeenDateTime: "2021-01-21T08:44:54.356000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:49:07.564558",
    UpdateDateTime: "2021-03-18T08:03:30.636913",
  },
  {
    DeviceId: "UI106",
    DeviceMetadata: {
      DeviceName: "Light006",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 36,
        DeviceCoordinates: {
          Latitude: 22.344044,
          Longitude: 114.100998,
        },
      },
      DeviceGroup: "1",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:46.819897+00:00",
      LastSeenDateTime: "2021-01-21T08:14:42.646000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:23:06.750044",
    UpdateDateTime: "2021-03-18T08:03:28.537830",
  },
  {
    DeviceId: "UI101",
    DeviceMetadata: {
      DeviceName: "Light001",
      DeviceDescription: "Device Description",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 120,
        DeviceCoordinates: {
          Latitude: 22.302711,
          Longitude: 114.177216,
        },
      },
      DeviceGroup: "1",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "Deepstream",
          SoftwareVersion: "v13.5",
          UpdateDateTime: "2020-01-20T23:00:00",
        },
        {
          SoftwareName: "SystemMonitor",
          SoftwareVersion: "v13.5",
          UpdateDateTime: "2020-01-20T23:00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "Resnet-10",
      AIModelVersion: "Model001",
      UpdateDateTime: "2020-01-21T23:00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Online",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:36.944639+00:00",
      LastSeenDateTime: "2021-01-14T06:05:05.377000+00:00",
    },
    SiteImageUrl: null,
    CreationDateTime: "2021-01-08T09:23:33.147864",
    UpdateDateTime: "2021-03-18T08:00:36.949896",
  },
  {
    DeviceId: "UI111",
    DeviceMetadata: {
      DeviceName: "Light011",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 79,
        DeviceCoordinates: {
          Latitude: 22.279909,
          Longitude: 114.173729,
        },
      },
      DeviceGroup: "1",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:47.057551+00:00",
      LastSeenDateTime: "2021-01-21T08:14:42.646000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:42:56.608087",
    UpdateDateTime: "2021-03-18T08:03:28.772920",
  },
  {
    DeviceId: "UI118",
    DeviceMetadata: {
      DeviceName: "Light018",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 162,
        DeviceCoordinates: {
          Latitude: 22.285879,
          Longitude: 114.158134,
        },
      },
      DeviceGroup: "2",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:50:22.109000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:50:22.109000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:37.292838+00:00",
      LastSeenDateTime: "2021-01-21T08:50:22.109000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:53:30.725471",
    UpdateDateTime: "2021-03-18T08:00:37.297527",
  },
  {
    DeviceId: "UI112",
    DeviceMetadata: {
      DeviceName: "Light012",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 126,
        DeviceCoordinates: {
          Latitude: 22.321066,
          Longitude: 114.162193,
        },
      },
      DeviceGroup: "1",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:43:17.393000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:43:17.393000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:46.876533+00:00",
      LastSeenDateTime: "2021-01-21T08:43:17.393000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:44:41.729675",
    UpdateDateTime: "2021-03-18T08:03:28.592284",
  },
  {
    DeviceId: "UI117",
    DeviceMetadata: {
      DeviceName: "Light017",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 13,
        DeviceCoordinates: {
          Latitude: 22.30282,
          Longitude: 114.161308,
        },
      },
      DeviceGroup: "3",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:50:22.109000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:50:22.109000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:47.441788+00:00",
      LastSeenDateTime: "2021-01-21T08:50:22.109000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:52:17.186179",
    UpdateDateTime: "2021-03-18T08:03:30.550953",
  },
  {
    DeviceId: "UI108",
    DeviceMetadata: {
      DeviceName: "Light008",
      DeviceDescription: "This device is the one next to the bench.",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 325,
        DeviceCoordinates: {
          Latitude: 22.296501,
          Longitude: 114.172806,
        },
      },
      DeviceGroup: "2",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "Deepstream",
          SoftwareVersion: "v13.5",
          UpdateDateTime: "2021-01-14T03:43:43.595000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "Resnet-10",
      AIModelVersion: "Model001",
      UpdateDateTime: "2021-01-14T03:43:43.595000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:47.437694+00:00",
      LastSeenDateTime: "2021-01-14T06:05:05.377000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-14T03:46:47.275669",
    UpdateDateTime: "2021-03-18T08:03:29.152699",
  },
  {
    DeviceId: "UI119",
    DeviceMetadata: {
      DeviceName: "Light019",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 65,
        DeviceCoordinates: {
          Latitude: 22.27758,
          Longitude: 114.165993,
        },
      },
      DeviceGroup: "1",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:53:49.222000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:53:49.222000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:48.069001+00:00",
      LastSeenDateTime: "2021-01-21T08:53:49.222000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:55:52.024330",
    UpdateDateTime: "2021-03-18T08:03:31.178525",
  },
  {
    DeviceId: "UI100",
    DeviceMetadata: {
      DeviceName: "Light000",
      DeviceDescription: "Device Description",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 100,
        DeviceCoordinates: {
          Latitude: 22.4291,
          Longitude: 114.2086,
        },
      },
      DeviceGroup: "1",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 100.0,
            Y: 40.0,
          },
          {
            X: 120.0,
            Y: 40.0,
          },
          {
            X: 200.0,
            Y: 100.0,
          },
          {
            X: 220.0,
            Y: 100.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "Deepstream",
          SoftwareVersion: "v13.5",
          UpdateDateTime: "2020-01-20T23:00:00",
        },
        {
          SoftwareName: "SystemMonitor",
          SoftwareVersion: "v13.5",
          UpdateDateTime: "2020-01-20T23:00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "Resnet-10",
      AIModelVersion: "Model001",
      UpdateDateTime: "2020-01-21T23:00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Online",
      HealthStatus: "Healthy",
      UpdateDateTime: "2021-03-18T08:03:38.472853+00:00",
      LastSeenDateTime: "2021-03-18T08:00:48.410475+00:00",
    },
    SiteImageUrl:
      "https://stiotstage001.blob.core.windows.net/ltd/DF3633_18122020_2_17378.png",
    CreationDateTime: "2021-01-08T08:18:05.564309",
    UpdateDateTime: "2021-03-18T08:03:30.125603",
  },
  {
    DeviceId: "UI105",
    DeviceMetadata: {
      DeviceName: "Light005",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 17,
        DeviceCoordinates: {
          Latitude: 22.308046,
          Longitude: 113.91848,
        },
      },
      DeviceGroup: "1",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:47.537625+00:00",
      LastSeenDateTime: "2021-01-21T08:56:29.042000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:22:12.777455",
    UpdateDateTime: "2021-03-18T08:03:29.252514",
  },
  {
    DeviceId: "UI109",
    DeviceMetadata: {
      DeviceName: "Light009",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 51,
        DeviceCoordinates: {
          Latitude: 22.383205,
          Longitude: 114.141907,
        },
      },
      DeviceGroup: "3",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:47.655635+00:00",
      LastSeenDateTime: "2021-01-21T08:58:35.283000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:25:08.529265",
    UpdateDateTime: "2021-03-18T08:03:29.369928",
  },
  {
    DeviceId: "UI114",
    DeviceMetadata: {
      DeviceName: "Light014",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 96,
        DeviceCoordinates: {
          Latitude: 22.318237,
          Longitude: 114.168137,
        },
      },
      DeviceGroup: "3",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:44:54.356000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:44:54.356000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:47.204786+00:00",
      LastSeenDateTime: "2021-01-21T08:44:54.356000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:47:46.904364",
    UpdateDateTime: "2021-03-18T08:03:28.920612",
  },
  {
    DeviceId: "UI102",
    DeviceMetadata: {
      DeviceName: "Light002",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 142,
        DeviceCoordinates: {
          Latitude: 22.285978,
          Longitude: 114.19149,
        },
      },
      DeviceGroup: "3",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:47.643556+00:00",
      LastSeenDateTime: "2021-01-21T08:14:42.646000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:17:19.100278",
    UpdateDateTime: "2021-03-18T08:03:29.358540",
  },
  {
    DeviceId: "UI113",
    DeviceMetadata: {
      DeviceName: "Light013",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 92,
        DeviceCoordinates: {
          Latitude: 22.342962,
          Longitude: 114.192978,
        },
      },
      DeviceGroup: "1",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:44:54.356000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:44:54.356000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:47.312888+00:00",
      LastSeenDateTime: "2021-01-21T08:44:54.356000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:46:40.979965",
    UpdateDateTime: "2021-03-18T08:03:29.028474",
  },
  {
    DeviceId: "UI110",
    DeviceMetadata: {
      DeviceName: "Light010",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 75,
        DeviceCoordinates: {
          Latitude: 22.400723,
          Longitude: 113.971832,
        },
      },
      DeviceGroup: "2",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:47.655765+00:00",
      LastSeenDateTime: "2021-01-21T08:56:29.042000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:40:06.481013",
    UpdateDateTime: "2021-03-18T08:03:30.763835",
  },
  {
    DeviceId: "UI103",
    DeviceMetadata: {
      DeviceName: "Light003",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 142,
        DeviceCoordinates: {
          Latitude: 22.370157,
          Longitude: 114.123489,
        },
      },
      DeviceGroup: "1",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:47.513339+00:00",
      LastSeenDateTime: "2021-01-21T08:58:35.283000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:19:40.496481",
    UpdateDateTime: "2021-03-18T08:03:30.621001",
  },
  {
    DeviceId: "UI104",
    DeviceMetadata: {
      DeviceName: "Light004",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 14,
        DeviceCoordinates: {
          Latitude: 22.302219,
          Longitude: 114.174637,
        },
      },
      DeviceGroup: "2",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:47.164226+00:00",
      LastSeenDateTime: "2021-01-21T09:03:30.515000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:19:55.119582",
    UpdateDateTime: "2021-03-18T08:03:28.879869",
  },
  {
    DeviceId: "UI116",
    DeviceMetadata: {
      DeviceName: "Light016",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 104,
        DeviceCoordinates: {
          Latitude: 22.279305,
          Longitude: 114.161491,
        },
      },
      DeviceGroup: "1",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:44:54.356000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:44:54.356000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:47.505249+00:00",
      LastSeenDateTime: "2021-01-21T08:44:54.356000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:50:07.328467",
    UpdateDateTime: "2021-03-18T08:03:30.613285",
  },
  {
    DeviceId: "UI107",
    DeviceMetadata: {
      DeviceName: "Light007",
      DeviceDescription: "string",
      IPAddress: "192.0.2.1",
      MACAddress: "00:1B:44:11:3A:B7",
      DeviceLocation: {
        District: "Sha Tin",
        Street: "Science Park 1 Road",
        LampPostNumber: 36,
        DeviceCoordinates: {
          Latitude: 22.282721,
          Longitude: 114.212303,
        },
      },
      DeviceGroup: "1",
    },
    DetectionZoneCoordinates: {
      NorthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
      SouthboundRegion: [
        [
          {
            X: 0.0,
            Y: 0.0,
          },
        ],
      ],
    },
    SoftwareMetadata: {
      SoftwareList: [
        {
          SoftwareName: "string",
          SoftwareVersion: "string",
          UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
        },
      ],
    },
    AIModelMetadata: {
      AIModelName: "string",
      AIModelVersion: "string",
      UpdateDateTime: "2021-01-21T08:14:42.646000+00:00",
    },
    DeviceStatus: {
      ConnectionStatus: "Offline",
      HealthStatus: "Unhealthy",
      UpdateDateTime: "2021-03-18T08:00:46.836332+00:00",
      LastSeenDateTime: "2021-01-21T08:57:55.993000+00:00",
    },
    SiteImageUrl: "string",
    CreationDateTime: "2021-01-21T08:22:45.679699",
    UpdateDateTime: "2021-03-18T08:03:28.551997",
  },
];

router.get("/", auth, (req, res) => {
  res.send(devices);
});

module.exports = router;
