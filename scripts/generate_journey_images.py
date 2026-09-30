import os
from PIL import Image

os.makedirs('public/images/journey/desktop', exist_ok=True)
os.makedirs('public/images/journey/mobile', exist_ok=True)

montage_path = 'public/images/journey/source/a_wide_cinematic_composite_montage_of_the_same_por.png'
montage = Image.open(montage_path).convert('RGB')

stages = [
    {
        'id': '01-night',
        'y': (0, 200),
        'sky': (8, 7, 12),
        'water': (10, 7, 8),
    },
    {
        'id': '02-predawn',
        'y': (206, 402),
        'sky': (16, 20, 36),
        'water': (18, 16, 22),
    },
    {
        'id': '03-first-light',
        'y': (408, 602),
        'sky': (50, 38, 42),
        'water': (42, 36, 38),
    },
    {
        'id': '04-sunrise',
        'y': (608, 802),
        'sky': (80, 50, 32),
        'water': (65, 52, 45),
    },
    {
        'id': '05-daylight',
        'y': (808, 1020),
        'sky': (175, 195, 218),
        'water': (110, 118, 128),
    },
]

def make_gradient(width, height, color1, color2):
    base = Image.new('RGB', (width, height), color1)
    top = Image.new('RGB', (width, height), color2)
    mask = Image.new('L', (width, height))
    mask_data = []
    for y in range(height):
        val = int(255 * (y / max(1, height - 1)))
        mask_data.extend([val] * width)
    mask.putdata(mask_data)
    return Image.composite(top, base, mask)

for stg in stages:
    strip = montage.crop((0, stg['y'][0], 1536, stg['y'][1]))
    stage_id = stg['id']
    
    # === DESKTOP 1920x1080 ===
    DW, DH = 1920, 1080
    d_strip_w = 1920
    d_strip_h = int(strip.height * (1920 / 1536))
    scaled_strip_d = strip.resize((d_strip_w, d_strip_h), Image.Resampling.LANCZOS)
    
    # Place harbor at y: 460 to (460 + d_strip_h) = ~710
    strip_y_d = 460
    
    canvas_d = Image.new('RGB', (DW, DH), stg['sky'])
    
    # Sample top row average for sky connection
    top_colors = [scaled_strip_d.getpixel((x, 2)) for x in range(0, DW, 10)]
    avg_top = tuple(int(sum(c[i] for c in top_colors) / len(top_colors)) for i in range(3))
    
    sky_grad = make_gradient(DW, strip_y_d + 12, stg['sky'], avg_top)
    canvas_d.paste(sky_grad, (0, 0))
    
    # Sample bottom row average for water connection
    bot_colors = [scaled_strip_d.getpixel((x, d_strip_h - 3)) for x in range(0, DW, 10)]
    avg_bot = tuple(int(sum(c[i] for c in bot_colors) / len(bot_colors)) for i in range(3))
    
    water_h = DH - (strip_y_d + d_strip_h - 10)
    water_grad = make_gradient(DW, water_h, avg_bot, stg['water'])
    canvas_d.paste(water_grad, (0, strip_y_d + d_strip_h - 10))
    
    # Feather top and bottom edges (16px) for zero visible seams
    feather_mask = Image.new('L', (d_strip_w, d_strip_h), 255)
    f_data = []
    feather_px = 16
    for y in range(d_strip_h):
        if y < feather_px:
            v = int(255 * (y / feather_px))
        elif y > d_strip_h - feather_px:
            v = int(255 * ((d_strip_h - 1 - y) / feather_px))
        else:
            v = 255
        f_data.extend([v] * d_strip_w)
    feather_mask.putdata(f_data)
    
    canvas_d.paste(scaled_strip_d, (0, strip_y_d), feather_mask)
    
    out_d = f"public/images/journey/desktop/{stage_id}.webp"
    canvas_d.save(out_d, "WEBP", quality=95)
    print(f"Saved Desktop: {out_d} ({canvas_d.size})")

    # === MOBILE 1080x1920 ===
    MW, MH = 1080, 1920
    # Center crop around crane & protagonist landmark (x=318 to 1218, width 900px)
    mob_crop = strip.crop((318, 0, 1218, strip.height))
    m_strip_w = MW
    m_strip_h = int(mob_crop.height * (MW / mob_crop.width))
    scaled_strip_m = mob_crop.resize((m_strip_w, m_strip_h), Image.Resampling.LANCZOS)
    
    # Harbor positioned at y=800 to ~1040
    strip_y_m = 800
    canvas_m = Image.new('RGB', (MW, MH), stg['sky'])
    
    # Top sky gradient
    top_m = [scaled_strip_m.getpixel((x, 2)) for x in range(0, MW, 10)]
    avg_top_m = tuple(int(sum(c[i] for c in top_m) / len(top_m)) for i in range(3))
    sky_m = make_gradient(MW, strip_y_m + 12, stg['sky'], avg_top_m)
    canvas_m.paste(sky_m, (0, 0))
    
    # Water gradient
    bot_m = [scaled_strip_m.getpixel((x, m_strip_h - 3)) for x in range(0, MW, 10)]
    avg_bot_m = tuple(int(sum(c[i] for c in bot_m) / len(bot_m)) for i in range(3))
    water_m_h = MH - (strip_y_m + m_strip_h - 10)
    water_m = make_gradient(MW, water_m_h, avg_bot_m, stg['water'])
    canvas_m.paste(water_m, (0, strip_y_m + m_strip_h - 10))
    
    # Paste strip with feathered top and bottom edges
    feather_mask_m = Image.new('L', (m_strip_w, m_strip_h), 255)
    f_data_m = []
    for y in range(m_strip_h):
        if y < feather_px:
            v = int(255 * (y / feather_px))
        elif y > m_strip_h - feather_px:
            v = int(255 * ((m_strip_h - 1 - y) / feather_px))
        else:
            v = 255
        f_data_m.extend([v] * m_strip_w)
    feather_mask_m.putdata(f_data_m)
    
    canvas_m.paste(scaled_strip_m, (0, strip_y_m), feather_mask_m)
    
    out_m = f"public/images/journey/mobile/{stage_id}.webp"
    canvas_m.save(out_m, "WEBP", quality=95)
    print(f"Saved Mobile: {out_m} ({canvas_m.size})")

print("All 10 desktop & mobile dynamic assets successfully generated!")
