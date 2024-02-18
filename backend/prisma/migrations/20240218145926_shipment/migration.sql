-- CreateTable
CREATE TABLE "Trackshipment" (
    "id" SERIAL NOT NULL,
    "awbNumber" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Trackshipment_pkey" PRIMARY KEY ("id")
);
