// Placing orders using COD method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
        
    }
  } catch (error) {}
};

// Placing orders using stripe method
const placeOrderStripe = async (req, res) => {};

// Placing orders using razorpay method
const placeOrderRazorpay = async (req, res) => {};

// All orders data for Admin Panel
const allOrders = async (req, res) => {};

// User Order Data for frontend
const userOrders = async (req, res) => {};

// update order status from Admin Panel
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
