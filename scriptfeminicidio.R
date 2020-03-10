install.packages("rtweet")

library(rtweet)

rt <- search_tweets(
  "feminicidio", n = 18000, include_rts = FALSE
)

library(ggplot2)
plot <- rt %>%
  ts_plot("1 day") +
  ggplot2::theme_minimal() +
  ggplot2::theme(plot.title = ggplot2::element_text(face = "bold")) +
  ggplot2::labs(
    x = NULL, y = NULL,
    title = "Frequency of #rstats Twitter statuses from past 9 days",
    subtitle = "Twitter status (tweet) counts aggregated using three-hour intervals",
    caption = "\nSource: Data collected from Twitter's REST API via rtweet"
  )


plot



