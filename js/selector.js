// ========================================
// GLOBAL VARIABLES
// ========================================
const photos = [
  "imagenes/thumb/DSC_0005.webp",
  "imagenes/thumb/DSC_0006.webp",
  "imagenes/thumb/DSC_0007.webp",
  "imagenes/thumb/DSC_0008.webp",
  "imagenes/thumb/DSC_0009.webp",
  "imagenes/thumb/DSC_0010.webp",
  "imagenes/thumb/DSC_0011.webp",
  "imagenes/thumb/DSC_0012.webp",
  "imagenes/thumb/DSC_0013.webp",
  "imagenes/thumb/DSC_0016.webp",
  "imagenes/thumb/DSC_0017.webp",
  "imagenes/thumb/DSC_0018.webp",
  "imagenes/thumb/DSC_0019.webp",
  "imagenes/thumb/DSC_0020.webp",
  "imagenes/thumb/DSC_0021.webp",
  "imagenes/thumb/DSC_0022.webp",
  "imagenes/thumb/DSC_0023.webp",
  "imagenes/thumb/DSC_0024.webp",
  "imagenes/thumb/DSC_0025.webp",
  "imagenes/thumb/DSC_0026.webp",
  "imagenes/thumb/DSC_0027.webp",
  "imagenes/thumb/DSC_0028.webp",
  "imagenes/thumb/DSC_0029.webp",
  "imagenes/thumb/DSC_0030.webp",
  "imagenes/thumb/DSC_0031.webp",
  "imagenes/thumb/DSC_0032.webp",
  "imagenes/thumb/DSC_0033.webp",
  "imagenes/thumb/DSC_0034.webp",
  "imagenes/thumb/DSC_0035.webp",
  "imagenes/thumb/DSC_0036.webp",
  "imagenes/thumb/DSC_0037.webp",
  "imagenes/thumb/DSC_0038.webp",
  "imagenes/thumb/DSC_0039.webp",
  "imagenes/thumb/DSC_0040.webp",
  "imagenes/thumb/DSC_0041.webp",
  "imagenes/thumb/DSC_0042.webp",
  "imagenes/thumb/DSC_0043.webp",
  "imagenes/thumb/DSC_0044.webp",
  "imagenes/thumb/DSC_0045.webp",
  "imagenes/thumb/DSC_0046.webp",
  "imagenes/thumb/DSC_0047.webp",
  "imagenes/thumb/DSC_0048.webp",
  "imagenes/thumb/DSC_0049.webp",
  "imagenes/thumb/DSC_0050.webp",
  "imagenes/thumb/DSC_0051.webp",
  "imagenes/thumb/DSC_0052.webp",
  "imagenes/thumb/DSC_0053.webp",
  "imagenes/thumb/DSC_0054.webp",
  "imagenes/thumb/DSC_0055.webp",
  "imagenes/thumb/DSC_0056.webp",
  "imagenes/thumb/DSC_0057.webp",
  "imagenes/thumb/DSC_0058.webp",
  "imagenes/thumb/DSC_0059.webp",
  "imagenes/thumb/DSC_0060.webp",
  "imagenes/thumb/DSC_0061.webp",
  "imagenes/thumb/DSC_0062.webp",
  "imagenes/thumb/DSC_0063.webp",
  "imagenes/thumb/DSC_0064.webp",
  "imagenes/thumb/DSC_0065.webp",
  "imagenes/thumb/DSC_0066.webp",
  "imagenes/thumb/DSC_0067.webp",
  "imagenes/thumb/DSC_0068.webp",
  "imagenes/thumb/DSC_0069.webp",
  "imagenes/thumb/DSC_0070.webp",
  "imagenes/thumb/DSC_0071.webp",
  "imagenes/thumb/DSC_0072.webp",
  "imagenes/thumb/DSC_0073.webp",
  "imagenes/thumb/DSC_0074.webp",
  "imagenes/thumb/DSC_0075.webp",
  "imagenes/thumb/DSC_0076.webp",
  "imagenes/thumb/DSC_0077.webp",
  "imagenes/thumb/DSC_0078.webp",
  "imagenes/thumb/DSC_0079.webp",
  "imagenes/thumb/DSC_0080.webp",
  "imagenes/thumb/DSC_0081.webp",
  "imagenes/thumb/DSC_0082.webp",
  "imagenes/thumb/DSC_0083.webp",
  "imagenes/thumb/DSC_0084.webp",
  "imagenes/thumb/DSC_0085.webp",
  "imagenes/thumb/DSC_0086.webp",
  "imagenes/thumb/DSC_0087.webp",
  "imagenes/thumb/DSC_0088.webp",
  "imagenes/thumb/DSC_0089.webp",
  "imagenes/thumb/DSC_0090.webp",
  "imagenes/thumb/DSC_0091.webp",
  "imagenes/thumb/DSC_0092.webp",
  "imagenes/thumb/DSC_0093.webp",
  "imagenes/thumb/DSC_0094.webp",
  "imagenes/thumb/DSC_0095.webp",
  "imagenes/thumb/DSC_0096.webp",
  "imagenes/thumb/DSC_0097.webp",
  "imagenes/thumb/DSC_0098.webp",
  "imagenes/thumb/DSC_0099.webp",
  "imagenes/thumb/DSC_0100.webp",
  "imagenes/thumb/DSC_0101.webp",
  "imagenes/thumb/DSC_0102.webp",
  "imagenes/thumb/DSC_0103.webp",
  "imagenes/thumb/DSC_0104.webp",
  "imagenes/thumb/DSC_0105.webp",
  "imagenes/thumb/DSC_0106.webp",
  "imagenes/thumb/DSC_0107.webp",
  "imagenes/thumb/DSC_0108.webp",
  "imagenes/thumb/DSC_0109.webp",
  "imagenes/thumb/DSC_0110.webp",
  "imagenes/thumb/DSC_0111.webp",
  "imagenes/thumb/DSC_0112.webp",
  "imagenes/thumb/DSC_0113.webp",
  "imagenes/thumb/DSC_0114.webp",
  "imagenes/thumb/DSC_0115.webp",
  "imagenes/thumb/DSC_0116.webp",
  "imagenes/thumb/DSC_0117.webp",
  "imagenes/thumb/DSC_0118.webp",
  "imagenes/thumb/DSC_0119.webp",
  "imagenes/thumb/DSC_0120.webp",
  "imagenes/thumb/DSC_0121.webp",
  "imagenes/thumb/DSC_0122.webp",
  "imagenes/thumb/DSC_0123.webp",
  "imagenes/thumb/DSC_0124.webp",
  "imagenes/thumb/DSC_0125.webp",
  "imagenes/thumb/DSC_0126.webp",
  "imagenes/thumb/DSC_0127.webp",
  "imagenes/thumb/DSC_0128.webp",
  "imagenes/thumb/DSC_0129.webp",
  "imagenes/thumb/DSC_0130.webp",
  "imagenes/thumb/DSC_0131.webp",
  "imagenes/thumb/DSC_0132.webp",
  "imagenes/thumb/DSC_0133.webp",
  "imagenes/thumb/DSC_0134.webp",
  "imagenes/thumb/DSC_0135.webp",
  "imagenes/thumb/DSC_0136.webp",
  "imagenes/thumb/DSC_0137.webp",
  "imagenes/thumb/DSC_0138.webp",
  "imagenes/thumb/DSC_0139.webp",
  "imagenes/thumb/DSC_0140.webp",
  "imagenes/thumb/DSC_0141.webp",
  "imagenes/thumb/DSC_0142.webp",
  "imagenes/thumb/DSC_0143.webp",
  "imagenes/thumb/DSC_0144.webp",
  "imagenes/thumb/DSC_0145.webp",
  "imagenes/thumb/DSC_0146.webp",
  "imagenes/thumb/DSC_0147.webp",
  "imagenes/thumb/DSC_0148.webp",
  "imagenes/thumb/DSC_0149.webp",
  "imagenes/thumb/DSC_0150.webp",
  "imagenes/thumb/DSC_0151.webp",
  "imagenes/thumb/DSC_0152.webp",
  "imagenes/thumb/DSC_0153.webp",
  "imagenes/thumb/DSC_0154.webp",
  "imagenes/thumb/DSC_0155.webp",
  "imagenes/thumb/DSC_0156.webp",
  "imagenes/thumb/DSC_0157.webp",
  "imagenes/thumb/DSC_0158.webp",
  "imagenes/thumb/DSC_0159.webp",
  "imagenes/thumb/DSC_0160.webp",
  "imagenes/thumb/DSC_0161.webp",
  "imagenes/thumb/DSC_0162.webp",
  "imagenes/thumb/DSC_0163.webp",
  "imagenes/thumb/DSC_0164.webp",
  "imagenes/thumb/DSC_0165.webp",
  "imagenes/thumb/DSC_0166.webp",
  "imagenes/thumb/DSC_0167.webp",
  "imagenes/thumb/DSC_0168.webp",
  "imagenes/thumb/DSC_0169.webp",
  "imagenes/thumb/DSC_0170.webp",
  "imagenes/thumb/DSC_0171.webp",
  "imagenes/thumb/DSC_0172.webp",
  "imagenes/thumb/DSC_0173.webp",
  "imagenes/thumb/DSC_0174.webp",
  "imagenes/thumb/DSC_0175.webp",
  "imagenes/thumb/DSC_0176.webp",
  "imagenes/thumb/DSC_0177.webp",
  "imagenes/thumb/DSC_0178.webp",
  "imagenes/thumb/DSC_0179.webp",
  "imagenes/thumb/DSC_0180.webp",
  "imagenes/thumb/DSC_0181.webp",
  "imagenes/thumb/DSC_0182.webp",
  "imagenes/thumb/DSC_0183.webp",
  "imagenes/thumb/DSC_0184.webp",
  "imagenes/thumb/DSC_0185.webp",
  "imagenes/thumb/DSC_0186.webp",
  "imagenes/thumb/DSC_0187.webp",
  "imagenes/thumb/DSC_0188.webp",
  "imagenes/thumb/DSC_0189.webp",
  "imagenes/thumb/DSC_0190.webp",
  "imagenes/thumb/DSC_0191.webp",
  "imagenes/thumb/DSC_0192.webp",
  "imagenes/thumb/DSC_0193.webp",
  "imagenes/thumb/DSC_0194.webp",
  "imagenes/thumb/DSC_0195.webp",
  "imagenes/thumb/DSC_0196.webp",
  "imagenes/thumb/DSC_0197.webp",
  "imagenes/thumb/DSC_0198.webp",
  "imagenes/thumb/DSC_0199.webp",
  "imagenes/thumb/DSC_0200.webp",
  "imagenes/thumb/DSC_0201.webp",
  "imagenes/thumb/DSC_0202.webp",
  "imagenes/thumb/DSC_0203.webp",
  "imagenes/thumb/DSC_0204.webp",
  "imagenes/thumb/DSC_0205.webp",
  "imagenes/thumb/DSC_0206.webp",
  "imagenes/thumb/DSC_0207.webp",
  "imagenes/thumb/DSC_0208.webp",
  "imagenes/thumb/DSC_0209.webp",
  "imagenes/thumb/DSC_0210.webp",
  "imagenes/thumb/DSC_0211.webp",
  "imagenes/thumb/DSC_0212.webp",
  "imagenes/thumb/DSC_0213.webp",
  "imagenes/thumb/DSC_0214.webp",
  "imagenes/thumb/DSC_0215.webp",
  "imagenes/thumb/DSC_0216.webp",
  "imagenes/thumb/DSC_0217.webp",
  "imagenes/thumb/DSC_0218.webp",
  "imagenes/thumb/DSC_0219.webp",
  "imagenes/thumb/DSC_0220.webp",
  "imagenes/thumb/DSC_0221.webp",
  "imagenes/thumb/DSC_0222.webp",
  "imagenes/thumb/DSC_0223.webp",
  "imagenes/thumb/DSC_0224.webp",
  "imagenes/thumb/DSC_0225.webp",
  "imagenes/thumb/DSC_0226.webp",
  "imagenes/thumb/DSC_0227.webp",
  "imagenes/thumb/DSC_0228.webp",
  "imagenes/thumb/DSC_0229.webp",
  "imagenes/thumb/DSC_0230.webp",
  "imagenes/thumb/DSC_0231.webp",
  "imagenes/thumb/DSC_0232.webp",
  "imagenes/thumb/DSC_0233.webp",
  "imagenes/thumb/DSC_0234.webp",
  "imagenes/thumb/DSC_0235.webp",
  "imagenes/thumb/DSC_0236.webp",
  "imagenes/thumb/DSC_0237.webp",
  "imagenes/thumb/DSC_0238.webp",
  "imagenes/thumb/DSC_0239.webp",
  "imagenes/thumb/DSC_0240.webp",
  "imagenes/thumb/DSC_0241.webp",
  "imagenes/thumb/DSC_0242.webp",
  "imagenes/thumb/DSC_0243.webp",
  "imagenes/thumb/DSC_0244.webp",
  "imagenes/thumb/DSC_0245.webp",
  "imagenes/thumb/DSC_0246.webp",
  "imagenes/thumb/DSC_0247.webp",
  "imagenes/thumb/DSC_0248.webp",
  "imagenes/thumb/DSC_0249.webp",
  "imagenes/thumb/DSC_0250.webp",
  "imagenes/thumb/DSC_0251.webp",
  "imagenes/thumb/DSC_0252.webp",
  "imagenes/thumb/DSC_0253.webp",
  "imagenes/thumb/DSC_0254.webp",
  "imagenes/thumb/DSC_0255.webp",
  "imagenes/thumb/DSC_0256.webp",
  "imagenes/thumb/DSC_0257.webp",
  "imagenes/thumb/DSC_0258.webp",
  "imagenes/thumb/DSC_0259.webp",
  "imagenes/thumb/DSC_0260.webp",
  "imagenes/thumb/DSC_0261.webp",
  "imagenes/thumb/DSC_0262.webp",
  "imagenes/thumb/DSC_0263.webp",
  "imagenes/thumb/DSC_0264.webp",
  "imagenes/thumb/DSC_0265.webp",
  "imagenes/thumb/DSC_0266.webp",
  "imagenes/thumb/DSC_0267.webp",
  "imagenes/thumb/DSC_0268.webp",
  "imagenes/thumb/DSC_0269.webp",
  "imagenes/thumb/DSC_0270.webp",
  "imagenes/thumb/DSC_0271.webp",
  "imagenes/thumb/DSC_0272.webp",
  "imagenes/thumb/DSC_0273.webp",
  "imagenes/thumb/DSC_0274.webp",
  "imagenes/thumb/DSC_0275.webp",
  "imagenes/thumb/DSC_0276.webp",
  "imagenes/thumb/DSC_0277.webp",
  "imagenes/thumb/DSC_0278.webp",
  "imagenes/thumb/DSC_0279.webp",
  "imagenes/thumb/DSC_0280.webp",
  "imagenes/thumb/DSC_0281.webp",
  "imagenes/thumb/DSC_0282.webp",
  "imagenes/thumb/DSC_0283.webp",
  "imagenes/thumb/DSC_0284.webp",
  "imagenes/thumb/DSC_0285.webp",
  "imagenes/thumb/DSC_0286.webp",
  "imagenes/thumb/DSC_0287.webp",
  "imagenes/thumb/DSC_0288.webp",
  "imagenes/thumb/DSC_0289.webp",
  "imagenes/thumb/DSC_0290.webp",
  "imagenes/thumb/DSC_0291.webp",
  "imagenes/thumb/DSC_0292.webp",
  "imagenes/thumb/DSC_0293.webp",
  "imagenes/thumb/DSC_0294.webp",
  "imagenes/thumb/DSC_0295.webp",
  "imagenes/thumb/DSC_0296.webp",
  "imagenes/thumb/DSC_0297.webp",
  "imagenes/thumb/DSC_0298.webp",
  "imagenes/thumb/DSC_0299.webp",
  "imagenes/thumb/DSC_0300.webp",
  "imagenes/thumb/DSC_0301.webp",
  "imagenes/thumb/DSC_0302.webp",
  "imagenes/thumb/DSC_0303.webp",
  "imagenes/thumb/DSC_0304.webp",
  "imagenes/thumb/DSC_0305.webp",
  "imagenes/thumb/DSC_0306.webp",
  "imagenes/thumb/DSC_0307.webp",
  "imagenes/thumb/DSC_0308.webp",
  "imagenes/thumb/DSC_0309.webp",
  "imagenes/thumb/DSC_0310.webp",
  "imagenes/thumb/DSC_0311.webp",
  "imagenes/thumb/DSC_0312.webp",
  "imagenes/thumb/DSC_0313.webp",
  "imagenes/thumb/DSC_0314.webp",
  "imagenes/thumb/DSC_0315.webp",
  "imagenes/thumb/DSC_0316.webp",
  "imagenes/thumb/DSC_0317.webp",
  "imagenes/thumb/DSC_0318.webp",
  "imagenes/thumb/DSC_0319.webp",
  "imagenes/thumb/DSC_0320.webp",
  "imagenes/thumb/DSC_0321.webp",
  "imagenes/thumb/DSC_0322.webp",
  "imagenes/thumb/DSC_0323.webp",
  "imagenes/thumb/DSC_0324.webp",
  "imagenes/thumb/DSC_0325.webp",
  "imagenes/thumb/DSC_0326.webp",
  "imagenes/thumb/DSC_0327.webp",
  "imagenes/thumb/DSC_0328.webp",
  "imagenes/thumb/DSC_0329.webp",
  "imagenes/thumb/DSC_0330.webp",
  "imagenes/thumb/DSC_0331.webp",
  "imagenes/thumb/DSC_0332.webp",
  "imagenes/thumb/DSC_0333.webp",
  "imagenes/thumb/DSC_0334.webp",
  "imagenes/thumb/DSC_0335.webp",
  "imagenes/thumb/DSC_0336.webp",
  "imagenes/thumb/DSC_0337.webp",
  "imagenes/thumb/DSC_0338.webp",
  "imagenes/thumb/DSC_0339.webp",
  "imagenes/thumb/DSC_0340.webp",
  "imagenes/thumb/DSC_0341.webp",
  "imagenes/thumb/DSC_0342.webp",
  "imagenes/thumb/DSC_0343.webp",
  "imagenes/thumb/DSC_0344.webp",
  "imagenes/thumb/DSC_0345.webp",
  "imagenes/thumb/DSC_0346.webp",
  "imagenes/thumb/DSC_0347.webp",
  "imagenes/thumb/DSC_0348.webp",
  "imagenes/thumb/DSC_0349.webp",
  "imagenes/thumb/DSC_0350.webp",
  "imagenes/thumb/DSC_0351.webp",
  "imagenes/thumb/DSC_0352.webp",
  "imagenes/thumb/DSC_0353.webp",
  "imagenes/thumb/DSC_0354.webp",
  "imagenes/thumb/DSC_0355.webp",
  "imagenes/thumb/DSC_0356.webp",
  "imagenes/thumb/DSC_0357.webp",
  "imagenes/thumb/DSC_0358.webp",
  "imagenes/thumb/DSC_0359.webp",
  "imagenes/thumb/DSC_0360.webp",
  "imagenes/thumb/DSC_0361.webp",
  "imagenes/thumb/DSC_0362.webp",
  "imagenes/thumb/DSC_0363.webp",
  "imagenes/thumb/DSC_0364.webp",
  "imagenes/thumb/DSC_0365.webp",
  "imagenes/thumb/DSC_0366.webp",
  "imagenes/thumb/DSC_0367.webp",
  "imagenes/thumb/DSC_0368.webp",
  "imagenes/thumb/DSC_0369.webp",
  "imagenes/thumb/DSC_0370.webp",
  "imagenes/thumb/DSC_0371.webp",
  "imagenes/thumb/DSC_0372.webp",
  "imagenes/thumb/DSC_0373.webp",
  "imagenes/thumb/DSC_0374.webp",
  "imagenes/thumb/DSC_0375.webp",
  "imagenes/thumb/DSC_0376.webp",
  "imagenes/thumb/DSC_0377.webp",
  "imagenes/thumb/DSC_0378.webp",
  "imagenes/thumb/DSC_0379.webp",
  "imagenes/thumb/DSC_0380.webp",
  "imagenes/thumb/DSC_0381.webp",
  "imagenes/thumb/DSC_0382.webp",
  "imagenes/thumb/DSC_0383.webp",
  "imagenes/thumb/DSC_0384.webp",
  "imagenes/thumb/DSC_0385.webp",
  "imagenes/thumb/DSC_0386.webp",
  "imagenes/thumb/DSC_0387.webp",
  "imagenes/thumb/DSC_0388.webp",
  "imagenes/thumb/DSC_0389.webp",
  "imagenes/thumb/DSC_0390.webp",
  "imagenes/thumb/DSC_0391.webp",
  "imagenes/thumb/DSC_0392.webp",
  "imagenes/thumb/DSC_0393.webp",
  "imagenes/thumb/DSC_0394.webp",
  "imagenes/thumb/DSC_0395.webp",
  "imagenes/thumb/DSC_0396.webp",
  "imagenes/thumb/DSC_0397.webp",
  "imagenes/thumb/DSC_0398.webp",
  "imagenes/thumb/DSC_0399.webp",
  "imagenes/thumb/DSC_0400.webp",
  "imagenes/thumb/DSC_0401.webp",
  "imagenes/thumb/DSC_0402.webp",
  "imagenes/thumb/DSC_0403.webp",
  "imagenes/thumb/DSC_0404.webp",
  "imagenes/thumb/DSC_0405.webp",
  "imagenes/thumb/DSC_0406.webp",
  "imagenes/thumb/DSC_0407.webp",
  "imagenes/thumb/DSC_0408.webp",
  "imagenes/thumb/DSC_0409.webp",
  "imagenes/thumb/DSC_0410.webp",
  "imagenes/thumb/DSC_0411.webp",
  "imagenes/thumb/DSC_0412.webp",
  "imagenes/thumb/DSC_0413.webp",
  "imagenes/thumb/DSC_0414.webp",
  "imagenes/thumb/DSC_0415.webp",
  "imagenes/thumb/DSC_0416.webp",
  "imagenes/thumb/DSC_0417.webp",
  "imagenes/thumb/DSC_0418.webp",
  "imagenes/thumb/DSC_0419.webp",
  "imagenes/thumb/DSC_0420.webp",
  "imagenes/thumb/DSC_0421.webp",
  "imagenes/thumb/DSC_0422.webp",
  "imagenes/thumb/DSC_0423.webp",
  "imagenes/thumb/DSC_0424.webp",
  "imagenes/thumb/DSC_0425.webp",
  "imagenes/thumb/DSC_0426.webp",
  "imagenes/thumb/DSC_0427.webp",
  "imagenes/thumb/DSC_0428.webp",
  "imagenes/thumb/DSC_0429.webp",
  "imagenes/thumb/DSC_0430.webp",
  "imagenes/thumb/DSC_0431.webp",
  "imagenes/thumb/DSC_0432.webp",
  "imagenes/thumb/DSC_0433.webp",
  "imagenes/thumb/DSC_0434.webp",
  "imagenes/thumb/DSC_0435.webp",
  "imagenes/thumb/DSC_0436.webp",
  "imagenes/thumb/DSC_0437.webp",
  "imagenes/thumb/DSC_0438.webp",
  "imagenes/thumb/DSC_0439.webp",
  "imagenes/thumb/DSC_0440.webp",
  "imagenes/thumb/DSC_0441.webp",
  "imagenes/thumb/DSC_0442.webp",
  "imagenes/thumb/DSC_0443.webp",
  "imagenes/thumb/DSC_0444.webp",
  "imagenes/thumb/DSC_0445.webp",
  "imagenes/thumb/DSC_0446.webp",
  "imagenes/thumb/DSC_0447.webp",
  "imagenes/thumb/DSC_0448.webp",
  "imagenes/thumb/DSC_0449.webp",
  "imagenes/thumb/DSC_0450.webp",
  "imagenes/thumb/DSC_0451.webp",
  "imagenes/thumb/DSC_0452.webp",
  "imagenes/thumb/DSC_0453.webp",
  "imagenes/thumb/DSC_0454.webp",
  "imagenes/thumb/DSC_0456.webp",
  "imagenes/thumb/DSC_0458.webp",
  "imagenes/thumb/DSC_0459.webp",
  "imagenes/thumb/DSC_0460.webp",
  "imagenes/thumb/DSC_0461.webp",
  "imagenes/thumb/DSC_0462.webp",
  "imagenes/thumb/DSC_0463.webp",
  "imagenes/thumb/DSC_0464.webp",
  "imagenes/thumb/DSC_0465.webp",
  "imagenes/thumb/DSC_0466.webp",
  "imagenes/thumb/DSC_0467.webp",
  "imagenes/thumb/DSC_0468.webp",
  "imagenes/thumb/DSC_0469.webp",
  "imagenes/thumb/DSC_0470.webp",
  "imagenes/thumb/DSC_0471.webp",
  "imagenes/thumb/DSC_0472.webp",
  "imagenes/thumb/DSC_0473.webp",
  "imagenes/thumb/DSC_0474.webp",
  "imagenes/thumb/DSC_0475.webp",
  "imagenes/thumb/DSC_0476.webp",
  "imagenes/thumb/DSC_0477.webp",
  "imagenes/thumb/DSC_0478.webp",
  "imagenes/thumb/DSC_0479.webp",
  "imagenes/thumb/DSC_0480.webp",
  "imagenes/thumb/DSC_0481.webp",
  "imagenes/thumb/DSC_0482.webp",
  "imagenes/thumb/DSC_0483.webp",
  "imagenes/thumb/DSC_0484.webp",
  "imagenes/thumb/DSC_0485.webp",
  "imagenes/thumb/DSC_0486.webp",
  "imagenes/thumb/DSC_0487.webp",
  "imagenes/thumb/DSC_0488.webp",
  "imagenes/thumb/DSC_0489.webp",
  "imagenes/thumb/DSC_0490.webp",
  "imagenes/thumb/DSC_0491.webp",
  "imagenes/thumb/DSC_0492.webp",
  "imagenes/thumb/DSC_0494.webp",
  "imagenes/thumb/DSC_0495.webp",
  "imagenes/thumb/DSC_0496.webp",
  "imagenes/thumb/DSC_0497.webp",
  "imagenes/thumb/DSC_0498.webp",
  "imagenes/thumb/DSC_0499.webp",
  "imagenes/thumb/DSC_0500.webp",
  "imagenes/thumb/DSC_0501.webp",
  "imagenes/thumb/DSC_0502.webp",
  "imagenes/thumb/DSC_0503.webp",
  "imagenes/thumb/DSC_0504.webp",
  "imagenes/thumb/DSC_0505.webp",
  "imagenes/thumb/DSC_0506.webp",
  "imagenes/thumb/DSC_0507.webp",
  "imagenes/thumb/DSC_0508.webp",
  "imagenes/thumb/DSC_0509.webp",
  "imagenes/thumb/DSC_0510.webp",
  "imagenes/thumb/DSC_0511.webp",
  "imagenes/thumb/DSC_0512.webp",
  "imagenes/thumb/DSC_0513.webp",
  "imagenes/thumb/DSC_0514.webp",
  "imagenes/thumb/DSC_0515.webp",
  "imagenes/thumb/DSC_0516.webp",
  "imagenes/thumb/DSC_0517.webp",
  "imagenes/thumb/DSC_0518.webp",
  "imagenes/thumb/DSC_0519.webp",
  "imagenes/thumb/DSC_0520.webp",
  "imagenes/thumb/DSC_0522.webp",
  "imagenes/thumb/DSC_0523.webp",
  "imagenes/thumb/DSC_0524.webp",
  "imagenes/thumb/DSC_0525.webp",
  "imagenes/thumb/DSC_0526.webp",
  "imagenes/thumb/DSC_0527.webp",
  "imagenes/thumb/DSC_0528.webp",
  "imagenes/thumb/DSC_0530.webp",
  "imagenes/thumb/DSC_0531.webp",
  "imagenes/thumb/DSC_0532.webp",
  "imagenes/thumb/DSC_0533.webp",
  "imagenes/thumb/DSC_0534.webp",
  "imagenes/thumb/DSC_0535.webp",
  "imagenes/thumb/DSC_0537.webp",
  "imagenes/thumb/DSC_0538.webp",
  "imagenes/thumb/DSC_0539.webp",
  "imagenes/thumb/DSC_0540.webp",
  "imagenes/thumb/DSC_0541.webp",
  "imagenes/thumb/DSC_0542.webp",
  "imagenes/thumb/DSC_0543.webp",
  "imagenes/thumb/DSC_0544.webp",
  "imagenes/thumb/DSC_0545.webp",
  "imagenes/thumb/DSC_0546.webp",
  "imagenes/thumb/DSC_0547.webp",
  "imagenes/thumb/DSC_0548.webp",
  "imagenes/thumb/DSC_0549.webp",
  "imagenes/thumb/DSC_0550.webp",
  "imagenes/thumb/DSC_0551.webp",
  "imagenes/thumb/DSC_0552.webp",
  "imagenes/thumb/DSC_0553.webp",
  "imagenes/thumb/DSC_0554.webp",
  "imagenes/thumb/DSC_0555.webp",
  "imagenes/thumb/DSC_0556.webp",
  "imagenes/thumb/DSC_0557.webp",
  "imagenes/thumb/DSC_0558.webp",
  "imagenes/thumb/DSC_0559.webp",
  "imagenes/thumb/DSC_0560.webp",
  "imagenes/thumb/DSC_0561.webp",
  "imagenes/thumb/DSC_0562.webp",
  "imagenes/thumb/DSC_0563.webp",
  "imagenes/thumb/DSC_0564.webp",
  "imagenes/thumb/DSC_0565.webp",
  "imagenes/thumb/DSC_0566.webp",
  "imagenes/thumb/DSC_0567.webp",
  "imagenes/thumb/DSC_0568.webp",
  "imagenes/thumb/DSC_0569.webp",
  "imagenes/thumb/DSC_0570.webp",
  "imagenes/thumb/DSC_0571.webp",
  "imagenes/thumb/DSC_0572.webp",
  "imagenes/thumb/DSC_0573.webp",
  "imagenes/thumb/DSC_0574.webp",
  "imagenes/thumb/DSC_0575.webp",
  "imagenes/thumb/DSC_0576.webp",
  "imagenes/thumb/DSC_0577.webp",
  "imagenes/thumb/DSC_0578.webp",
  "imagenes/thumb/DSC_0579.webp",
  "imagenes/thumb/DSC_0580.webp",
  "imagenes/thumb/DSC_0581.webp",
  "imagenes/thumb/DSC_0582.webp",
  "imagenes/thumb/DSC_0583.webp",
  "imagenes/thumb/DSC_0584.webp",
  "imagenes/thumb/DSC_0585.webp",
  "imagenes/thumb/DSC_0586.webp",
  "imagenes/thumb/DSC_0587.webp",
  "imagenes/thumb/DSC_0588.webp",
  "imagenes/thumb/DSC_0589.webp",
  "imagenes/thumb/DSC_0590.webp",
  "imagenes/thumb/DSC_0591.webp",
  "imagenes/thumb/DSC_0592.webp",
  "imagenes/thumb/DSC_0593.webp",
  "imagenes/thumb/DSC_0594.webp",
  "imagenes/thumb/DSC_0595.webp",
  "imagenes/thumb/DSC_0596.webp",
  "imagenes/thumb/DSC_0597.webp",
  "imagenes/thumb/DSC_0598.webp",
  "imagenes/thumb/DSC_0599.webp",
  "imagenes/thumb/DSC_0600.webp",
  "imagenes/thumb/DSC_0601.webp",
  "imagenes/thumb/DSC_0602.webp",
  "imagenes/thumb/DSC_0603.webp",
  "imagenes/thumb/DSC_0604.webp",
  "imagenes/thumb/DSC_0605.webp",
  "imagenes/thumb/DSC_0606.webp",
  "imagenes/thumb/DSC_0607.webp",
  "imagenes/thumb/DSC_0608.webp",
  "imagenes/thumb/DSC_0609.webp",
  "imagenes/thumb/DSC_0610.webp",
  "imagenes/thumb/DSC_0611.webp",
  "imagenes/thumb/DSC_0612.webp",
  "imagenes/thumb/DSC_0613.webp",
  "imagenes/thumb/DSC_0614.webp",
  "imagenes/thumb/DSC_0615.webp",
  "imagenes/thumb/DSC_0616.webp",
  "imagenes/thumb/DSC_0617.webp",
  "imagenes/thumb/DSC_0618.webp",
  "imagenes/thumb/DSC_0619.webp",
  "imagenes/thumb/DSC_0620.webp",
  "imagenes/thumb/DSC_0621.webp",
  "imagenes/thumb/DSC_0622.webp",
  "imagenes/thumb/DSC_0623.webp",
  "imagenes/thumb/DSC_0624.webp",
  "imagenes/thumb/DSC_0625.webp",
  "imagenes/thumb/DSC_0626.webp",
  "imagenes/thumb/DSC_0627.webp",
  "imagenes/thumb/DSC_0628.webp",
  "imagenes/thumb/DSC_0629.webp",
  "imagenes/thumb/DSC_0630.webp",
  "imagenes/thumb/DSC_0631.webp",
  "imagenes/thumb/DSC_0632.webp",
  "imagenes/thumb/DSC_0633.webp",
  "imagenes/thumb/DSC_0634.webp",
  "imagenes/thumb/DSC_0635.webp",
  "imagenes/thumb/DSC_0636.webp",
  "imagenes/thumb/DSC_0637.webp",
  "imagenes/thumb/DSC_0638.webp",
  "imagenes/thumb/DSC_0639.webp",
  "imagenes/thumb/DSC_0640.webp",
  "imagenes/thumb/DSC_0641.webp",
  "imagenes/thumb/DSC_0642.webp",
  "imagenes/thumb/DSC_0643.webp",
  "imagenes/thumb/DSC_0644.webp",
  "imagenes/thumb/DSC_0645.webp",
  "imagenes/thumb/DSC_0646.webp",
  "imagenes/thumb/DSC_0647.webp",
  "imagenes/thumb/DSC_0648.webp",
  "imagenes/thumb/DSC_0649.webp",
  "imagenes/thumb/DSC_0650.webp",
  "imagenes/thumb/DSC_0651.webp",
  "imagenes/thumb/DSC_0652.webp",
  "imagenes/thumb/DSC_0653.webp",
  "imagenes/thumb/DSC_0654.webp",
  "imagenes/thumb/DSC_0655.webp",
  "imagenes/thumb/DSC_0656.webp",
  "imagenes/thumb/DSC_0657.webp",
  "imagenes/thumb/DSC_0658.webp",
  "imagenes/thumb/DSC_0659.webp",
  "imagenes/thumb/DSC_0660.webp",
  "imagenes/thumb/DSC_0661.webp",
  "imagenes/thumb/DSC_0662.webp",
  "imagenes/thumb/DSC_0663.webp",
  "imagenes/thumb/DSC_0664.webp",
  "imagenes/thumb/DSC_0665.webp",
  "imagenes/thumb/DSC_0666.webp",
  "imagenes/thumb/DSC_0667.webp",
  "imagenes/thumb/DSC_0668.webp",
  "imagenes/thumb/DSC_0669.webp",
  "imagenes/thumb/DSC_0670.webp",
  "imagenes/thumb/DSC_0671.webp",
  "imagenes/thumb/DSC_0672.webp",
  "imagenes/thumb/DSC_0673.webp",
  "imagenes/thumb/DSC_0674.webp",
  "imagenes/thumb/DSC_0675.webp",
  "imagenes/thumb/DSC_0676.webp",
  "imagenes/thumb/DSC_0677.webp",
  "imagenes/thumb/DSC_0678.webp",
  "imagenes/thumb/DSC_0679.webp",
  "imagenes/thumb/DSC_0680.webp",
  "imagenes/thumb/DSC_0681.webp",
  "imagenes/thumb/DSC_0682.webp",
  "imagenes/thumb/DSC_0683.webp",
  "imagenes/thumb/DSC_0684.webp",
  "imagenes/thumb/DSC_0685.webp",
  "imagenes/thumb/DSC_0686.webp",
  "imagenes/thumb/DSC_0687.webp",
  "imagenes/thumb/DSC_0688.webp",
  "imagenes/thumb/DSC_0689.webp",
  "imagenes/thumb/DSC_0690.webp",
  "imagenes/thumb/DSC_0691.webp",
  "imagenes/thumb/DSC_0692.webp",
  "imagenes/thumb/DSC_0693.webp",
  "imagenes/thumb/DSC_0694.webp",
  "imagenes/thumb/DSC_0695.webp",
  "imagenes/thumb/DSC_0696.webp",
  "imagenes/thumb/DSC_0697.webp",
  "imagenes/thumb/DSC_0698.webp",
  "imagenes/thumb/DSC_0699.webp",
  "imagenes/thumb/DSC_0700.webp",
  "imagenes/thumb/DSC_0701.webp",
  "imagenes/thumb/DSC_0702.webp",
  "imagenes/thumb/DSC_0703.webp",
  "imagenes/thumb/DSC_0704.webp",
  "imagenes/thumb/DSC_0705.webp",
  "imagenes/thumb/DSC_0706.webp",
  "imagenes/thumb/DSC_0707.webp",
  "imagenes/thumb/DSC_0708.webp",
  "imagenes/thumb/DSC_0709.webp",
  "imagenes/thumb/DSC_0710.webp",
  "imagenes/thumb/DSC_0711.webp",
  "imagenes/thumb/DSC_0712.webp",
  "imagenes/thumb/DSC_0713.webp",
  "imagenes/thumb/DSC_0714.webp",
  "imagenes/thumb/DSC_0715.webp",
  "imagenes/thumb/DSC_0716.webp",
  "imagenes/thumb/DSC_0717.webp",
  "imagenes/thumb/DSC_0718.webp",
  "imagenes/thumb/DSC_0719.webp",
  "imagenes/thumb/DSC_0720.webp",
  "imagenes/thumb/DSC_0721.webp",
  "imagenes/thumb/DSC_0722.webp",
  "imagenes/thumb/DSC_0723.webp",
  "imagenes/thumb/DSC_0724.webp",
  "imagenes/thumb/DSC_0725.webp",
  "imagenes/thumb/DSC_0726.webp",
  "imagenes/thumb/DSC_0727.webp",
  "imagenes/thumb/DSC_0728.webp",
  "imagenes/thumb/DSC_0729.webp",
  "imagenes/thumb/DSC_0730.webp",
  "imagenes/thumb/DSC_0731.webp",
  "imagenes/thumb/DSC_0732.webp",
  "imagenes/thumb/DSC_0733.webp",
  "imagenes/thumb/DSC_0734.webp",
  "imagenes/thumb/DSC_0735.webp",
  "imagenes/thumb/DSC_0736.webp",
  "imagenes/thumb/DSC_0737.webp",
  "imagenes/thumb/DSC_0738.webp",
  "imagenes/thumb/DSC_0739.webp",
  "imagenes/thumb/DSC_0740.webp",
  "imagenes/thumb/DSC_0741.webp",
  "imagenes/thumb/DSC_0742.webp",
  "imagenes/thumb/DSC_0743.webp",
  "imagenes/thumb/DSC_0744.webp",
  "imagenes/thumb/DSC_0745.webp",
  "imagenes/thumb/DSC_0746.webp",
  "imagenes/thumb/DSC_0747.webp",
  "imagenes/thumb/DSC_0748.webp",
  "imagenes/thumb/DSC_0749.webp",
  "imagenes/thumb/DSC_0750.webp",
  "imagenes/thumb/DSC_0751.webp",
  "imagenes/thumb/DSC_0752.webp",
  "imagenes/thumb/DSC_0753.webp",
  "imagenes/thumb/DSC_0754.webp",
  "imagenes/thumb/DSC_0755.webp",
  "imagenes/thumb/DSC_0756.webp",
  "imagenes/thumb/DSC_0757.webp",
  "imagenes/thumb/DSC_0758.webp",
  "imagenes/thumb/DSC_0759.webp",
  "imagenes/thumb/DSC_0760.webp",
  "imagenes/thumb/DSC_0761.webp",
  "imagenes/thumb/DSC_0762.webp",
  "imagenes/thumb/DSC_0763.webp",
  "imagenes/thumb/DSC_0764.webp",
  "imagenes/thumb/DSC_0765.webp",
  "imagenes/thumb/DSC_0766.webp",
  "imagenes/thumb/DSC_0767.webp",
  "imagenes/thumb/DSC_0768.webp",
  "imagenes/thumb/DSC_0769.webp",
  "imagenes/thumb/DSC_0770.webp",
  "imagenes/thumb/DSC_0771.webp",
  "imagenes/thumb/DSC_0772.webp",
  "imagenes/thumb/DSC_0773.webp",
  "imagenes/thumb/DSC_0774.webp",
  "imagenes/thumb/DSC_0775.webp",
  "imagenes/thumb/DSC_0776.webp",
  "imagenes/thumb/DSC_0777.webp",
  "imagenes/thumb/DSC_0778.webp",
  "imagenes/thumb/DSC_0779.webp",
  "imagenes/thumb/DSC_0780.webp",
  "imagenes/thumb/DSC_0781.webp",
  "imagenes/thumb/DSC_0782.webp",
  "imagenes/thumb/DSC_0783.webp",
  "imagenes/thumb/DSC_0784.webp",
  "imagenes/thumb/DSC_0785.webp",
  "imagenes/thumb/DSC_0786.webp",
  "imagenes/thumb/DSC_0787.webp",
  "imagenes/thumb/DSC_0788.webp",
  "imagenes/thumb/DSC_0789.webp",
  "imagenes/thumb/DSC_0790.webp",
  "imagenes/thumb/DSC_0791.webp",
  "imagenes/thumb/DSC_0792.webp",
  "imagenes/thumb/DSC_0793.webp",
  "imagenes/thumb/DSC_0794.webp",
  "imagenes/thumb/DSC_0795.webp",
  "imagenes/thumb/DSC_0796.webp",
  "imagenes/thumb/DSC_0797.webp",
  "imagenes/thumb/DSC_0798.webp",
  "imagenes/thumb/DSC_0799.webp",
  "imagenes/thumb/DSC_0800.webp",
  "imagenes/thumb/DSC_0801.webp",
  "imagenes/thumb/DSC_0802.webp",
  "imagenes/thumb/DSC_0803.webp",
  "imagenes/thumb/DSC_0804.webp",
  "imagenes/thumb/DSC_0805.webp",
  "imagenes/thumb/DSC_0806.webp",
  "imagenes/thumb/DSC_0807.webp",
  "imagenes/thumb/DSC_0808.webp",
  "imagenes/thumb/DSC_0809.webp",
  "imagenes/thumb/DSC_0810.webp",
  "imagenes/thumb/DSC_0811.webp",
  "imagenes/thumb/DSC_0812.webp",
  "imagenes/thumb/DSC_0813.webp",
  "imagenes/thumb/DSC_0814.webp",
  "imagenes/thumb/DSC_0815.webp",
  "imagenes/thumb/DSC_0816.webp",
  "imagenes/thumb/DSC_0817.webp",
  "imagenes/thumb/DSC_0818.webp",
  "imagenes/thumb/DSC_0819.webp",
  "imagenes/thumb/DSC_0820.webp",
  "imagenes/thumb/DSC_0821.webp",
  "imagenes/thumb/DSC_0822.webp",
  "imagenes/thumb/DSC_0823.webp",
  "imagenes/thumb/DSC_0824.webp",
  "imagenes/thumb/DSC_0825.webp",
  "imagenes/thumb/DSC_0826.webp",
  "imagenes/thumb/DSC_0827.webp",
  "imagenes/thumb/DSC_0828.webp",
  "imagenes/thumb/DSC_0829.webp",
  "imagenes/thumb/DSC_0830.webp",
  "imagenes/thumb/DSC_0831.webp",
  "imagenes/thumb/DSC_0832.webp",
  "imagenes/thumb/DSC_0833.webp",
  "imagenes/thumb/DSC_0834.webp",
  "imagenes/thumb/DSC_0835.webp",
  "imagenes/thumb/DSC_0836.webp",
  "imagenes/thumb/DSC_0837.webp",
  "imagenes/thumb/DSC_0838.webp",
  "imagenes/thumb/DSC_0839.webp",
  "imagenes/thumb/DSC_0840.webp",
  "imagenes/thumb/DSC_0841.webp",
  "imagenes/thumb/DSC_0842.webp",
  "imagenes/thumb/DSC_0843.webp",
  "imagenes/thumb/DSC_0844.webp",
  "imagenes/thumb/DSC_0845.webp",
  "imagenes/thumb/DSC_0846.webp",
  "imagenes/thumb/DSC_0847.webp",
  "imagenes/thumb/DSC_0848.webp",
  "imagenes/thumb/DSC_0849.webp",
  "imagenes/thumb/DSC_0850.webp",
  "imagenes/thumb/DSC_0851.webp",
  "imagenes/thumb/DSC_0852.webp",
  "imagenes/thumb/DSC_0853.webp",
  "imagenes/thumb/DSC_0854.webp",
  "imagenes/thumb/DSC_0855.webp",
  "imagenes/thumb/DSC_0856.webp",
  "imagenes/thumb/DSC_0857.webp",
  "imagenes/thumb/DSC_0858.webp",
  "imagenes/thumb/DSC_0859.webp",
  "imagenes/thumb/DSC_0860.webp",
  "imagenes/thumb/DSC_0861.webp",
  "imagenes/thumb/DSC_0862.webp",
  "imagenes/thumb/DSC_0863.webp",
  "imagenes/thumb/DSC_0864.webp",
  "imagenes/thumb/DSC_0865.webp",
  "imagenes/thumb/DSC_0866.webp",
  "imagenes/thumb/DSC_0867.webp",
  "imagenes/thumb/DSC_0868.webp",
  "imagenes/thumb/DSC_0869.webp",
  "imagenes/thumb/DSC_0870.webp",
  "imagenes/thumb/DSC_0871.webp",
  "imagenes/thumb/DSC_0872.webp",
  "imagenes/thumb/DSC_0873.webp",
  "imagenes/thumb/DSC_0874.webp",
  "imagenes/thumb/DSC_0875.webp",
  "imagenes/thumb/DSC_0876.webp",
  "imagenes/thumb/DSC_0877.webp",
  "imagenes/thumb/DSC_0878.webp",
  "imagenes/thumb/DSC_0879.webp",
  "imagenes/thumb/DSC_0880.webp",
  "imagenes/thumb/DSC_0881.webp",
  "imagenes/thumb/DSC_0882.webp",
  "imagenes/thumb/DSC_0883.webp",
  "imagenes/thumb/DSC_0884.webp",
  "imagenes/thumb/DSC_0885.webp",
  "imagenes/thumb/DSC_0886.webp",
  "imagenes/thumb/DSC_0887.webp",
  "imagenes/thumb/DSC_0888.webp",
  "imagenes/thumb/DSC_0889.webp",
  "imagenes/thumb/DSC_0890.webp",
  "imagenes/thumb/DSC_0891.webp",
  "imagenes/thumb/DSC_0892.webp",
  "imagenes/thumb/DSC_0893.webp",
  "imagenes/thumb/DSC_0894.webp",
  "imagenes/thumb/DSC_0895.webp",
  "imagenes/thumb/DSC_0896.webp",
  "imagenes/thumb/DSC_0897.webp",
  "imagenes/thumb/DSC_0898.webp",
  "imagenes/thumb/DSC_0899.webp",
  "imagenes/thumb/DSC_0900.webp",
  "imagenes/thumb/DSC_0901.webp",
  "imagenes/thumb/DSC_0902.webp",
  "imagenes/thumb/DSC_0903.webp",
  "imagenes/thumb/DSC_0904.webp",
  "imagenes/thumb/DSC_0905.webp",
  "imagenes/thumb/DSC_0906.webp",
  "imagenes/thumb/DSC_0907.webp",
  "imagenes/thumb/DSC_0908.webp",
  "imagenes/thumb/DSC_0909.webp",
  "imagenes/thumb/DSC_0910.webp",
  "imagenes/thumb/DSC_0911.webp",
  "imagenes/thumb/DSC_0912.webp",
  "imagenes/thumb/DSC_0913.webp",
  "imagenes/thumb/DSC_0914.webp",
  "imagenes/thumb/DSC_0915.webp",
  "imagenes/thumb/DSC_0916.webp",
  "imagenes/thumb/DSC_0917.webp",
  "imagenes/thumb/DSC_0918.webp",
  "imagenes/thumb/DSC_0919.webp",
  "imagenes/thumb/DSC_0920.webp",
  "imagenes/thumb/DSC_0921.webp",
  "imagenes/thumb/DSC_0922.webp",
  "imagenes/thumb/DSC_0923.webp",
  "imagenes/thumb/DSC_0924.webp",
  "imagenes/thumb/DSC_0925.webp",
  "imagenes/thumb/DSC_0926.webp",
  "imagenes/thumb/DSC_0928.webp",
  "imagenes/thumb/DSC_0929.webp",
  "imagenes/thumb/DSC_0930.webp",
  "imagenes/thumb/DSC_0931.webp",
  "imagenes/thumb/DSC_0932.webp",
  "imagenes/thumb/DSC_0933.webp",
  "imagenes/thumb/DSC_0934.webp",
  "imagenes/thumb/DSC_0935.webp",
  "imagenes/thumb/DSC_0936.webp",
  "imagenes/thumb/DSC_0937.webp",
  "imagenes/thumb/DSC_1009.webp"
];
// Thumbnail helper: usa thumb/ en grid para ahorrar RAM en moviles
function getThumbPath(fullPath) {
    return fullPath.replace('imagenes/', 'imagenes/thumb/');
}

const STORAGE_KEY = 'boda_lupita_alan_photo_selections';
const LIMITES = {
    ampliacion: 1,
    impresion: 100,
    invitacion: null
};
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent =
        LIMITES.ampliacion ? `${stats.ampliacion}/${LIMITES.ampliacion}` : stats.ampliacion;
    document.getElementById('countImpresion').textContent =
        LIMITES.impresion ? `${stats.impresion}/${LIMITES.impresion}` : stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    const ampliacionCard = document.querySelector('.stat-card.ampliacion');
    const impresionCard = document.querySelector('.stat-card.impresion');

    if (ampliacionCard) {
        if (stats.ampliacion > LIMITES.ampliacion) {
            ampliacionCard.style.borderColor = '#f44336';
            ampliacionCard.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
        } else if (stats.ampliacion === LIMITES.ampliacion) {
            ampliacionCard.style.borderColor = '#4caf50';
            ampliacionCard.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        } else {
            ampliacionCard.style.borderColor = '';
            ampliacionCard.style.backgroundColor = '';
        }
    }

    if (impresionCard) {
        if (stats.impresion > LIMITES.impresion) {
            impresionCard.style.borderColor = '#f44336';
            impresionCard.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
        } else if (stats.impresion === LIMITES.impresion) {
            impresionCard.style.borderColor = '#4caf50';
            impresionCard.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        } else {
            impresionCard.style.borderColor = '';
            impresionCard.style.backgroundColor = '';
        }
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún.</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        const mediaHTML = `
            <div class="photo-image-container">
                <img src="${getThumbPath(photo)}" alt="${displayNumber}" loading="lazy">
            </div>
        `;

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    modalImageContainer.innerHTML = `
        <img id="modalImage" src="${photo}" alt="${displayNumber}">
        <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
    `;

    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains("selected");
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    updateStats();
    updateFilterButtons();
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'Boda Alan & Lupita',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-boda-lupita-alan-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '💒 SELECCIÓN DE FOTOS - BODA BERENICE & OLIVER\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📋 SEGÚN CONTRATO:\n`;
    summary += `   🖼️  Ampliación requerida: ${LIMITES.ampliacion} foto (50x60 cm)\n`;
    summary += `   📸 Impresión requerida: ${LIMITES.impresion} fotos (5x7")\n\n`;
    summary += `📊 RESUMEN ACTUAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}/${LIMITES.ampliacion} ${stats.ampliacion === LIMITES.ampliacion ? '✓' : stats.ampliacion > LIMITES.ampliacion ? '⚠️ EXCEDIDO' : '⚠️ FALTA'}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}/${LIMITES.impresion} ${stats.impresion === LIMITES.impresion ? '✓' : stats.impresion > LIMITES.impresion ? '⚠️ EXCEDIDO' : '⚠️ FALTA'}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();

    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    document.getElementById('btnFilterAll').classList.add('active');

    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const isCurrentlySelected = btn.classList.contains('selected');

            if (!isCurrentlySelected) {
                const stats = getStats();

                if (category === 'ampliacion' && stats.ampliacion >= LIMITES.ampliacion) {
                    const currentSelection = photoSelections[currentPhotoIndex] || {};
                    if (!currentSelection.ampliacion) {
                        showToast(`⚠️ Ya seleccionaste ${LIMITES.ampliacion} foto(s) para ampliación. Deselecciona otra primero.`, 'error');
                        return;
                    }
                }

                if (category === 'impresion' && stats.impresion >= LIMITES.impresion) {
                    const currentSelection = photoSelections[currentPhotoIndex] || {};
                    if (!currentSelection.impresion) {
                        showToast(`⚠️ Ya seleccionaste ${LIMITES.impresion} fotos para impresión. Deselecciona otra primero.`, 'error');
                        return;
                    }
                }
            }

            btn.classList.toggle('selected');
        });
    });

    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });

    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections();
    }
});

window.addEventListener('beforeunload', (e) => {
    saveSelections();
});

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

// Inyectar botones de descarga en el modal al cargar
(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions) return;
        if (document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
