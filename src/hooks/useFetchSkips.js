import { useEffect, useState } from "react";

export default function useFetchSkips(postcode = "NR32", area = "Lowestoft") {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`)
      .then(res => res.json())
      .then(data => {
        setSkips(data);
        setLoading(false);
      });
  }, [postcode, area]);

  return { skips, loading };
}
