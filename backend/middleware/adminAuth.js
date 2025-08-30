const adminAuth = (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({ success: false, message: "Not authorized, login again" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.email !== process.env.ADMIN_EMAIL || decoded.role !== "admin") {
      return res.json({ success: false, message: "Not authorized, login again" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
