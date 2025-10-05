import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { reference },
  } = req;

  if (!reference) {
    return res
      .status(400)
      .json({ success: false, message: "Reference is required" });
  }

  try {
    const apiResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_TEST_KEY}`,
        },
      }
    );

    if (!apiResponse.ok) {
      throw new Error(`Error: ${apiResponse.statusText}`);
    }

    const data = await apiResponse.json();
    return res.status(200).json({ success: true, data: data.data });
  } catch (error: any) {
    console.error("Error verifying transaction:", error);
    return res.status(400).json({ success: false, message: error.message });
  }
}
