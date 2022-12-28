from youtube_channel_scraper.scraper import YoutubeScraper

scraper = YoutubeScraper("https://www.youtube.com/@DomonationYT/featured")
crawled_videos = scraper.scrape()

print(crawled_videos)
