const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Admin = require('./models/Admin');
const bcrypt = require('bcryptjs');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const seedAdmin = async () => {
  try {
    await connectDB();

    const username = process.env.ADMIN_USERNAME || 'admin';
    const password = process.env.ADMIN_PASSWORD || 'admin123';

    const existing = await Admin.findOne({ username });
    if (existing) {
      console.log('Admin user already exists:', username);
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await Admin.create({ username, password: hashedPassword });
    console.log('Default admin user created:', username);
    process.exit(0);
  } catch (error) {
    console.error('Admin seed error:', error.message);
    process.exit(1);
  }
};

seedAdmin();
