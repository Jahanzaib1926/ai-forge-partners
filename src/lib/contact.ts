/** MoraStack business contact (public) */
export const MORASTACK = {
  name: "MoraStack",
  tagline: "Where Cloud, Code, Intelligence Converge",
  address: {
    line: "5645 Hillcroft St suite 702, Houston, TX 77036, United States",
    mapsQuery: "5645 Hillcroft St suite 702, Houston, TX 77036",
  },
  phone: {
    display: "+1 (346) 875-8788",
    tel: "+13468758788", // E.164 for tel:
  },
  email: "info@morastack.com",
} as const;

export const contactMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MORASTACK.address.mapsQuery)}`;
