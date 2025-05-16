const asyncHandler = require("express-async-handler");
const prisma = require("../../prisma/client");
const { status } = require("express/lib/response");

// Get all users who attended on a specific date
const getAttendanceByDate = asyncHandler(async (req, res) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).json({ message: "Date is required" });
  }

  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    return res.status(400).json({ message: "Invalid date format" });
  }

  // Get start and end of the day in UTC
  const startOfDay = new Date(parsedDate.setUTCHours(0, 0, 0, 0));
  const endOfDay = new Date(parsedDate.setUTCHours(23, 59, 59, 999));

  const attendanceRecords = await prisma.attendance.findMany({
    where: {
      date: {
        gte: startOfDay, // Greater than or equal to 00:00:00
        lte: endOfDay, // Less than or equal to 23:59:59
      },
    },
    include: {
      user: {
        select: {
          id: true,
          fullName: true,
          daysLeft: true,
          startDate: true,
          status: true,
          phoneNumber: true,
        },
      },
    },
  });

  const attendees = attendanceRecords.map((record) => record.user);

  res.status(200).json(attendees);
});

module.exports = { getAttendanceByDate };
