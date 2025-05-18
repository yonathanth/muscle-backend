const asyncHandler = require("express-async-handler");
const prisma = require("../../prisma/client");
const { status } = require("express/lib/response");

// Get all users who attended on a specific date
const getAttendanceByDate = asyncHandler(async (req, res) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).json({ message: "Date is required" });
  }

  // Parse the date and handle timezone consistently
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    return res.status(400).json({ message: "Invalid date format" });
  }

  // Create date range for the specified date in UTC
  const startOfDay = new Date(
    Date.UTC(
      parsedDate.getUTCFullYear(),
      parsedDate.getUTCMonth(),
      parsedDate.getUTCDate(),
      0,
      0,
      0,
      0
    )
  );

  const endOfDay = new Date(
    Date.UTC(
      parsedDate.getUTCFullYear(),
      parsedDate.getUTCMonth(),
      parsedDate.getUTCDate(),
      23,
      59,
      59,
      999
    )
  );

  const attendanceRecords = await prisma.attendance.findMany({
    where: {
      date: {
        gte: startOfDay,
        lte: endOfDay,
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
