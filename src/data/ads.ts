import inventory from "../../ad-placement-manifest.json";
import type { AdConfig } from "@/types/ads";

// Page Builder replaces the sample inventory and leaves matching codes empty; only Adsterra Integrator supplies real codes.
export const ads: AdConfig = {
  units: {
    "page-top-728x90": "<script>\n  atOptions = {\n    'key' : '6b416a0df36c9663929d0e81cb2a1856',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/6b416a0df36c9663929d0e81cb2a1856\"></script>",
    "page-top-468x60": "<script>\n  atOptions = {\n    'key' : 'e3e602b1a8f6b3fcd5c1932582ddcbfe',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e3e602b1a8f6b3fcd5c1932582ddcbfe\"></script>",
    "page-top-320x50": "<script>\n  atOptions = {\n    'key' : 'ab88f63d57526556897db1a0f9dfe536',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/ab88f63d57526556897db1a0f9dfe536\"></script>",
    "home-after-entry-native": "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/6c1c4fb6e85d7d7e237159807121321e\"></script>\n<div id=\"container-6c1c4fb6e85d7d7e237159807121321e\"></div>",
    "home-directory-end-468x60": "<script>\n  atOptions = {\n    'key' : 'e3e602b1a8f6b3fcd5c1932582ddcbfe',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e3e602b1a8f6b3fcd5c1932582ddcbfe\"></script>",
    "home-directory-end-320x50": "<script>\n  atOptions = {\n    'key' : 'ab88f63d57526556897db1a0f9dfe536',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/ab88f63d57526556897db1a0f9dfe536\"></script>",
    "guide-native-native": "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/6c1c4fb6e85d7d7e237159807121321e\"></script>\n<div id=\"container-6c1c4fb6e85d7d7e237159807121321e\"></div>",
    "guide-section-break-728x90": "<script>\n  atOptions = {\n    'key' : '6b416a0df36c9663929d0e81cb2a1856',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/6b416a0df36c9663929d0e81cb2a1856\"></script>",
    "guide-section-break-468x60": "<script>\n  atOptions = {\n    'key' : 'e3e602b1a8f6b3fcd5c1932582ddcbfe',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e3e602b1a8f6b3fcd5c1932582ddcbfe\"></script>",
    "guide-section-break-320x50": "<script>\n  atOptions = {\n    'key' : 'ab88f63d57526556897db1a0f9dfe536',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/ab88f63d57526556897db1a0f9dfe536\"></script>",
    "guide-before-faq-468x60": "<script>\n  atOptions = {\n    'key' : 'e3e602b1a8f6b3fcd5c1932582ddcbfe',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e3e602b1a8f6b3fcd5c1932582ddcbfe\"></script>",
    "guide-before-faq-320x50": "<script>\n  atOptions = {\n    'key' : 'ab88f63d57526556897db1a0f9dfe536',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/ab88f63d57526556897db1a0f9dfe536\"></script>",
    "footer-sponsored-smartlink": "https://araplhn.org/4/efd611829c90480ec7982f80ebe2b7ff",
  },
};

export const adInventory = inventory;
